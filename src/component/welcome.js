import React, { Component } from "react";

class Welcome extends React.Component {
	render() {
		return <h4>Note: {this.props.msg}</h4>;
	}
}

export default Welcome;