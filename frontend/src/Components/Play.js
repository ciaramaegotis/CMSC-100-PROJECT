import React, { Component } from 'react';
import './CSS/Home.css';
import Button from './Button.js';
import './../../semantic/dist/semantic.min.css';

class Play extends Component {
  render() {
    return (
      <div className ="ui inverted segment" id = "numberQuestion">
		  <div className ="ui inverted input" id = "maximizeInput">
		    <input id = "maximizeInput" type="number" placeholder="Enter number of questioins..."/>
		  </div>
		  <div className = "ui inverted divider"></div>
		  <div className = "ui form">
			  <div className = "grouped fields">
			    <label id = "labelDesign">Choose preferred categories</label>
			    <div className = "field">
			      <div className = "ui radio checkbox">
			        <input type="radio" name="example2"/>
			        <label id = "labelDesign">Twice a day</label>
			      </div>
			    </div>
			  </div>
		</div>
<div className = "ui inverted divider"></div>
		  <button className = "massive ui inverted button" id = "startButton" onClick = {()=>{window.location="/"}}> Cancel Game </button>
		  <button className = "massive ui inverted button" id = "startButton" onClick = {()=>{window.location ="/"}}> Start Game </button>
	</div>
    );
  }
}

export default Play;
