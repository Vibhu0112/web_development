import React from 'react'
import "../style.css"

function Footer() {

  const year= new Date().getFullYear();

  return (
    <div className='footer'>CopyRight {year}</div>
  )
}

export default Footer