import React, { useState } from 'react'

function Clock() {

    setInterval(updateTime,1000)
    const now = new Date().toLocaleTimeString();

    const [time,setTime] = useState(now);

    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
}

function done(){
    alert("already updated")
}
  return (
    <div>
        <h1>{time}</h1>
        <button onClick={done}>Update Time</button>
    </div>
  )
}

export default Clock