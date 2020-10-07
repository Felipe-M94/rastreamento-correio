import React, { useState } from 'react'
import TrackingResult from './components/TrackingResult'
import TrackingForm from './components/TrackingForm'

function App() {
  const [data, setData] = useState([]);

  //função que impede o funcionamento padrão do formulário.
  const submitHandler = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  
   //chamada para api, onde é enviado o código de rastreio digitado no formulário. 
    fetch(`http://localhost:3001/?tracking=${data.tracking}`)
      .then(response => response.json())
      .then(result => {
        if (result.message === "OK") {
          setData(result.data);
        }
      })
      .catch(console.error);
  }

  //renderização de 2 componentes, formulário e resultado!
  return (
    <div className="container">
      <TrackingForm submitHandler={submitHandler}/>
      <TrackingResult data={data} />
    </div>
  )
}

export default App
