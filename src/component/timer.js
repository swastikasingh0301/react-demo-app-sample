import React, { Component } from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleString() };
    // console.log(this.props)
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentWillUpdate() {
    // console.log("willupated")
  }

  render() {
    return (
      <div>
          Seconds: {this.state.time}
      </div>
    );
  }
}

export default Timer;