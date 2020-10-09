import React, { Component } from 'react';
import Father from '../../components/Memo/Father';

export default class MemoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Father></Father>
      </>
    )
  }
}