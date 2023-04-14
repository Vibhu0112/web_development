import React  from "react";
import "../style.css"

function Note(){
    return(
        <div className="note">
           <p className="p">This is the note title</p> 
           <p className="p">This is the note content</p>
        </div>
    )
}

export default Note;