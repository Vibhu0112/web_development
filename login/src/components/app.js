import React from 'react'
import "../style.css"
import Login from './login'

function LoginApp() {
  return (
    <div >
        <div className='form1'>
        <Login />

        {/* { isRegistered ?
            <Login />
        :
            <Register />
        } */}
 
        </div>
    </div>
  )
}

export default LoginApp