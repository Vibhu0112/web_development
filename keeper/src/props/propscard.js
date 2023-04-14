import React from 'react'
import "../style.css";
import ReactDOM from 'react-dom';

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img className='image' alt='avatar' src={props.img} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  )
}

ReactDOM.render(
    <div>
        <h1>My Contects</h1>
        <Card 
        name="Vibhu Dixit" 
         img="https://i.pinimg.com/originals/87/ae/83/87ae8360cfe56fda3b49e609eb3b7c25.jpg"
        tel="+91-85996-45876" email="vibhu987@gmail.com"
        />

        <Card 
        name="jai Dixit" 
         img="https://i.pinimg.com/originals/87/ae/83/87ae8360cfe56fda3b49e609eb3b7c25.jpg"
        tel="+91-85996-45876" email="vibhu987@gmail.com"
        />
        {/* <Propscard /> */}
    </div>,
    document.getElementById("root")
)

export default Card