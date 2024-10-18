import React from 'react'
import "../style/botonClear.css"

function BotonClear(props) {
  return (
    <div className='boton-clear'
    onClick={props.handleClear}>Clear</div>
  )
}

export default BotonClear