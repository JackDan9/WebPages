import React, { Component } from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{width: '100vh', height: '100vh', border: '1px solid red'}}>
        <h3>Loading</h3>
      </div>
    )
  }
}

export default Loading;