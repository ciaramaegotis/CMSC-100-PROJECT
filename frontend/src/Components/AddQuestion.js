import React, { Component } from 'react';
import Button from './Button';
import AddQuestionDropdown from './AddQuestionDropdown';
class AddQuestion extends Component {
	render(){
		return(
			<div>
			{/*map this*/}
				<div id="buttons" className ="ui left labeled button" tabindex="0">
  				<a class="ui basic right pointing label">
    			"Category"
    			</a>
        		<AddQuestionDropdown className="ui button" value={"+"}/>
        	</div> 
			</div>
		);
	}
}

export default AddQuestion;