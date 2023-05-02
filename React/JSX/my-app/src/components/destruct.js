import React from "react";
import cars from "./data"


function Destruct(){
 const [honda,hyundai] = cars
 const {model} = {honda,hyundai}
 const {speed :{topSpeed : hondatopSpeed,zeroToSixty : hondazeroToSixty}} = honda
 const {speed :{topSpeed : hyundaitopSpeed , zeroToSixty : hyundaizeroToSixty}} = hyundai
 const {colour : [hondaColour ]}= honda
 const {colour : [hyundaiColour]} = hyundai

 console.log(model);
    return(
     <div>
     <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Colour</th>
            <th>zero To Sixty</th>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondatopSpeed}</td>
            <td>{hondaColour}</td>
            <td>{hondazeroToSixty}</td>
        </tr>
        <tr>
            <td>{hyundai.model}</td>
            <td>{hyundaitopSpeed}</td>
            <td>{hyundaiColour}</td>
            <td>{hyundaizeroToSixty}</td>

        </tr>
    </table>
    </div>
)
}


export default Destruct