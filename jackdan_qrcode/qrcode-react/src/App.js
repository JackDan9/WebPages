import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
// import QRCode from 'react-qr-code';
import * as QRCode from './qrcode';
// import * as qr from 'qr.js';

function App() {
  useEffect(() => {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: "http://jindo.dev.naver.com/collie",
      width: 128,
      height: 128,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  }, [])
  return (
    <div className="App">
      <h2>二维码显示</h2>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <QRCode value='http://www.jackdan.cn/' /> */}
      
      <div id="qrcode"></div>
    </div>
  );
}

export default App;
