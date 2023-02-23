import React from 'react'
import '../components/../App.css'
function dynamictimeStyle() {
 
    const date = new Date();
    const time = date.getHours();
    let greetings;
  
  const customStyle={
      color : "" 
    }
  
    if(time < 12){
      greetings ="Good Morning"
      customStyle.color ="red"
    }else if(time <18){
      greetings ="Good After Noon"
      customStyle.color ="green"
    }else{
      greetings = "Good Evening"
      customStyle.color ="blue"
    }
  
  
  
     //good morning if 00 - 12 pm
     //good after noon if 12 - 6pm
     //good evening if 6 - 00
     //heading name style .heading {font-size:50px,font-weight:bold,border-bottom:5px solid black}
     //morning red noon green evening blue
    return (
      <h1 className="heading" style={customStyle}>{greetings}</h1>
      )

}

export default dynamictimeStyle