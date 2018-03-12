import React, { Component } from 'react';
import Timer from './timer';
import TodoApp from './todo';
// import TextareaComponent from './textarea';
import Element from './formatname';
import Welcome from './welcome'
// import Timezone from './timezone'
import Comment from '../component/comment/comment';
import {COMMENT} from './const'
// import Lifecycle from './lifecycle'
// import App from './error/error';


class Person extends Component {
  constructor(props) {
    super(props);
    //this.state = { name: 'DOG' };
  }
  render() {
    return (
      <React.Fragment>
        <h1>welcome ! {this.props.name}</h1>
        <TodoApp />
        <Timer name="sk" />
        <Comment
          date={COMMENT.date}
          text={COMMENT.text}
          author={COMMENT.author}
        />
        <Element name="Harsh" />
      </React.Fragment>
      
      
      
      //   <TextareaComponent />
      
      //   <Welcome />
      //   <Timezone/>
      
      // <Lifecycle/>
      // <App/>
       
    );
  }
}

export default Person;