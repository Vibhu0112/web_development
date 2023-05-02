import React from 'react'
import "../style.css"


function Input(props) {
  return (
    <div>
      <input type='props.type' className='form' placeholder={props.placeholder}/> 

    </div>
  )
}

export default Input