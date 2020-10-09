import React from 'react';
import ReactDOM from 'react-dom';
// import App from './pages/App';
// import MemoApp from './pages/MemoApp';
import LazyApp from './pages/LazyApp';

ReactDOM.render(
  <>
    <div>
      <LazyApp />
    </div>
  </>,
  document.getElementById('root')
);