import React from "react"

function TrackingResult({ events }) {
  console.log(events, 'AQUI')
  
  if (!events || events.length === 0) return null;

  return (
    <>
      <h1>Result</h1>
      <ul className="list-group">
        {events.map(item => {
          
          return (
            <li key={item.descricao} className="list-group-item">
              <span>Data: {item.data}</span>
              <span>Descrição: {item.descricao}</span>
              <span>Local: {item.cidade}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TrackingResult