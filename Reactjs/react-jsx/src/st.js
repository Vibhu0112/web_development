import { number } from 'prop-types'
import React from 'react'

const Student = (props) => {
  return (
    <div>
        <p>stud name : {props.name}</p>
        <p>phone no. : {props.phone}</p>
        <p>s1 marks : {props.m1}<br/>
          s2 marks : {props.m2}<br/>
          s3 marks : {props.m3}</p>

         <p>total marks : {number(props.m1)+
                           number(props.m2)+
                           number(props.m3)}</p> 

         <p>Result : {number(props.m1)+number(props.m2)+number(props.m3)>50 ?(
             <span>congratulations you are passed !</span>
         ):(
             <span>better luck next time</span>
           )}</p>                           
    </div>
  );
}

export default Student;