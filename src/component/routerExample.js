import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom'
import App from '../component/app';

class RouterExample extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
}
export default RouterExample;
