import React, { Component } from 'react';
import Button from './Button';
import AddQuestion from './AddQuestion';
import './../App.css';
class AddCategory extends Component {
	render(){
		return(
			<div class="ui big input">
  				<input id="buttons" placeholder="Category" type="text"/>
  				<input id="buttons" type="text" placeholder="Question"/>
				<input id="buttons" type="text" placeholder="Type"/>
				<input id="buttons" type="text" placeholder="Difficulty"/>
				<input id="buttons" type="text" placeholder="Correct Answer"/>
				<input id="buttons" type="text" placeholder="Choices"/>
			</div>
		);
	}

}

export default AddCategory;