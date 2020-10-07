import React from 'react'

function TrackingFrom({ submitHandler }) {
  return (
    <>
      <h1>Tracking</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input type="text" className="form-control" name="tracking" />
        </div>
        <button type="submit" className="btn btn-primary">
          Verificar
        </button>
      </form>
    </>
  )
}

export default TrackingFrom
