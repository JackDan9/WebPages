import React, { Component } from 'react';
import Father from '../../components/lazy/Father';

export default class LazyApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>LazyApp</h1>
        <Father />
      </div>
    )
  }
}