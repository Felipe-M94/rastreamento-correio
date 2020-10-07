import React, { useState } from 'react'
import TrackingResult from './components/TrackingResult'
import TrackingForm from './components/TrackingForm'
import { track } from './helpers/ApiHelper'

function App() {
  const [events, setEvents] = useState([]);

  //função que impede o funcionamento padrão do formulário.
  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
  
   //chamada para api, onde é enviado o código de rastreio digitado no formulário. 
    track(data.tracking).then(setEvents).catch(console.error)
  }

  //renderização de 2 componentes, formulário e resultado!
  return (
    <div className="container">
      <TrackingForm submitHandler={submitHandler}/>
      <TrackingResult events={events} />
    </div>
  )
}

export default App
