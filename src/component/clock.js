import React, { Component } from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  render() {
    return (
      <p className="Clock">
        The time is {this.state.time}.
      </p>
    );
  }
} 

export default Clock;