import React from 'react';
import { USER as user } from './const';

function formatName(user) {
  // this.state = { time: new Date().toLocaleString() };
  return `${user.firstName} ${user.lastName}`;
}

// function clock() {
//   this.setState({
//     time: new Date().toLocaleString()
//   });
// }

// function componentDidMount() {
//   this.interval = setInterval(() => this.tick(), 1000);
// }

// function componentWillUnmount() {
//   clearInterval(this.interval);
// }

 const imgurl ="https://picsum.photos/200/300/?random"
 const name="&"
 let time = new Date().toLocaleTimeString();


const Element = () => (
  <div>
  <h1>
    Hello, {formatName(user)}!
  </h1>
    <div className="heello" tabIndex="0">hello</div>
    <img src={imgurl} />
    <p>{name}</p>
    time now :: {time}
  </div>
);

//const Element = ()=> <h1>Hello, world</h1>;


export default Element;