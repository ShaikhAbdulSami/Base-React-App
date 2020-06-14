import React, { useState } from 'react';
import './Room.css';

const Room = () => {
  let [isLit, setLit] = useState("OFF")
  let [temp, setTemp] = useState(18)
  return (
    <div className={`room ${isLit}`}>
      <h1>Lights are {isLit} !!! </h1>
      <button className="on" onClick={() => { setLit(isLit = "ON") }}>
        Turn ON
      </button>
      <button className="off" onClick={() => { setLit(isLit = "OFF") }}>
        Turn OFF
      </button>
      <br />
      <br />
      <h1>{`Current Temperature is: ${temp} Celsius`}</h1>
      <br />
      <button className="plus" onClick={() => {
        return (
          setTemp(++temp)
        );
      }}>Increase Temperature</button>
      <button className="minus" onClick={() => {
        return (
          setTemp(--temp)
        );
      }}>Decrease Temperature</button>
      <hr />
      <p>Powered by Shaikh Enterprises</p>
      <p>Copyright &copy; 2020 Shaikh Enterprises. All Rights Reserved.</p>
      <hr />

    </div>
  );
}

export default Room;