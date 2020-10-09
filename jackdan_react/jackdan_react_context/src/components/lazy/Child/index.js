import React, { Component } from 'react';

export default class lazyChild extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Child</h2>
      </div>
    )
  }
}