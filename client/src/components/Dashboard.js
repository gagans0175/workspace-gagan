import React, { Component } from 'react';

export default class DashboardComponent extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 className=''>Dashboard component</h1>
        <div className='pad20 onlyTopPad'>List of all surveys</div>
      </div>
    );
  }
}
