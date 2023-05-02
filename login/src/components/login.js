import React, { useState } from 'react'
import "../style.css"
import Input from './input'
import EventHandling from './eventHandling';



function Login() {
  const [isRegistered,setIsRegistered] = useState();

  function handleRegis(event){
    setIsRegistered("true");
    event.preventDefault();

  }

  
  return (
    <div>
        <form action="submit">
          <h4>use of ternery operator</h4>
        <Input type="text" placeholder='username'/> 
        <Input type="password"  placeholder='password'/> 
        {isRegistered ? 
        null
        :
         <Input type="password"  placeholder='confirm password'/> 
}
        <button type='submit' className='button'>
         {isRegistered ? "Login" : "Register"} </button>
         <button className='button2' onClick={handleRegis} >
         {isRegistered ? null : "Already registered?"}

          </button>
    </form>
    </div>
  )
}

export default Login