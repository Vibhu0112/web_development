import React from "react";
import ReactDom from "react-dom";
import './index.css';
import App from "./App";



const name ="Vibhu";
const currentDate = new Date();
const year = currentDate.getFullYear();
const img ="https://picsum.photos/200";
ReactDom.render(
  <div>
    <App />
    {/*<div>
      <img src={img} />
      <img className="food-image" alt="food" src="https://www.bing.com/images/search?view=detailV2&ccid=j3uYsrDv&id=DC943700CBD1E954998D2FB758B7A1B79A12735B&thid=OIP.j3uYsrDvDgb3iLXvx1kcDgHaGh&mediaurl=https%3a%2f%2fwww.washingtonpost.com%2fresizer%2fY8B2f3IF5ZZSZqdR-EI8wyvGDmc%3d%2f1484x0%2farc-anglerfish-washpost-prod-washpost.s3.amazonaws.com%2fpublic%2fKXWS4XFKMQ5QBN7KGRHVEYJBD4.jpg&exph=1307&expw=1484&q=Food&simid=608019416425968450&FORM=IRPRST&ck=05E731F8F9A5A60916090C809AD27972&selectedIndex=0"/>
      <img className="food-image" alt="food" src="https://www.bing.com/images/search?view=detailV2&ccid=5yOiMuHb&id=03EA7D252535CC50E23F15162F1B5D5451AD3BD3&thid=OIP.5yOiMuHbLSnG2qOx6IvKbQHaE8&mediaurl=https%3a%2f%2fohmyveggies.com%2fwp-content%2fuploads%2f2017%2f08%2fPicMonkey-Collage-23.jpg&exph=2000&expw=3000&q=veg+Food&simid=607995948722693605&FORM=IRPRST&ck=8991F80569E95FCFF74003A3E0CC785C&selectedIndex=8"/>
      <img className="food-image" alt="food" src="https://www.bing.com/images/search?view=detailV2&ccid=06ZO4Dq9&id=6F8CBE3CDFBB2C919CF5E5B97D14A037D2616EC5&thid=OIP.06ZO4Dq9TUKgNkp23--VBAHaGH&mediaurl=https%3a%2f%2frecipeland.com%2fimages%2fr%2f20888%2f00147d86122134cde720_1024.jpg&exph=845&expw=1024&q=veg+burger&simid=608007596674461681&FORM=IRPRST&ck=063B4D07FAAA219280A0598B5D85AE9C&selectedIndex=132"/>
    </div>
     */}
    


{/* 
    hello {name}
    <br/>
    your lucky number is {Math.floor(Math.random()*20)}

 */}   

{/* */}
     <h1>Created By {name}</h1>
     <h2>Copyright {year}</h2>
    
     <h2>Copyright {currentDate.getFullYear()}</h2>       {/* if year is not defined constant */}
    
     </div>,

 document.getElementById("root"));


//this is a javascript code
/*
var h1= document.createElement("h1");
h1.innerHTML="hello Vibhu";
document.getElementById("root").appendChild(h1);
*/