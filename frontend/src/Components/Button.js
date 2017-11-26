import React, { Component } from 'react';
import './../App.css'
class Button extends Component {
  render() {
    return (
      <button id="buttons" className={this.props.className}  onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}

export default Button;
