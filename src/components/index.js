import React, { Component } from 'react';
import Timer from './timer';
import TodoApp from './todo';
import TextareaComponent from './textarea';
import Element from './formatname';
import Welcome from './welcome'


class Person extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'DOG' };
  }
  render() {
    return (
      <div>
        <h1>welcome ! {this.props.name}</h1>
        <Timer name="sk" />
        <TodoApp />
        <TextareaComponent />
        <Element name="jyothi" />
        <Welcome />
      </div>
    );
  }
}

export default Person;