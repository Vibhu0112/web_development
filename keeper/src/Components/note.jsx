import React  from "react";
import "../style.css"
// import Notes from './notes.js'

function Note(props){

    return(
        <div className="note">
           <p className="p">key{props.key}</p> 
           <p className="p">{props.title}</p> 
           <p className="p">{props.content}</p>
        </div>
    )
}

export default Note;