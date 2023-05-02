import React, { useState } from 'react'
import "../style.css"

function EventHandling() {

    const [handleText, setHandleText] = useState("");
    const [isMouseOver, setMouseOver] = useState(false)
    const [fullName,setFullName] = useState("");
    // const [lastName,setLastName] = useState("");

   function handleEvent(event){
    setHandleText("Submitted");
     event.preventDefault();
}
function mouseOver(){
   setMouseOver(true)
}

function mouseOut(){
    setMouseOver(false)
}

function handleChange(event){
    const newValue = event.target.value;
    const inputValue= event.target.name;
     // event is event which triggered the onchange ,
    //  target is the element that triggered this event and 
    // the value is that correspond to the value of some of these attributes
    
    setFullName(previousValue => {
        if(inputValue === "fname"){
            return {
                fname : newValue,
                lname : previousValue.lname,
            };
        }else if(inputValue === "lname"){
            return {
                fname : previousValue.fname,
                lname : newValue,
            }
        }
    })
}

// function handleChange1(event){
//     setLastName(event.target.value);
// }

  return (
    <div>
        <form className='form1' onSubmit={handleEvent} action="">
            <h4>Event Handling</h4>
            <h2>
                {/* {handleevent ? null : "Hello "} */}
                 {fullName.fname} {fullName.lname} {handleText}</h2>
        <input className='form'
        name='fname'
         type="text" 
         placeholder='first name'
         onChange={handleChange}
         /> 
        <input className='form'
        name='lname'
         type="text" 
          placeholder='last name'
          onChange={handleChange}
          /> 
        
        <button type='submit' style={{backgroundColor: isMouseOver ? "black" : "blue" }}
         className='button' onClick={handleEvent} onMouseOver={mouseOver}
         onMouseOut={mouseOut}
         >
            Submit
        </button>
    </form>
    </div>
  )
}

export default EventHandling