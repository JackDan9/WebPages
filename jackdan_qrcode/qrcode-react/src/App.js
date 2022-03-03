import logo from './logo.svg';
import './App.css';
import QRCode from 'react-qr-code';

function App() {
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
      <QRCode value='http://www.jackdan.cn/' />
    </div>
  );
}

export default App;
