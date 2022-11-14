import logo from './logo.svg';
import './App.css';

import React,  { useEffect, useRef, useState } from 'react';

function App() { 
  const [time, setTime] = useState(10);
  const [rushTitle, setRushTile] = useState('抢购');
  const countRef = useRef(null);

  const count = () => {
    if (time > 0) {
      setTime(time - 1);
    }
  };

  useEffect(() => {
    countRef.current = count;
  });


  useEffect(() => {
    const timer = setInterval(() => countRef.current(), 1000);

    return () => clearInterval(timer);
  }, []);

  const requestTime = (timer) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('已抢购');
      }, timer);
  })
  }

  const getData = async () => {
    const res = await requestTime(1000);
    setRushTile(res);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="left">

        </div>
        <div className="right">
          {
            time ? <button>{time.toString().padStart(2, '') + 's'}</button> : <button onClick={getData}>{rushTitle}</button>
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
