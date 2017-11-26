import React, { Component } from 'react';

import Button from './Button';
import './../App.css';
class Edit extends Component {
  render() {
    return (
      <div id="makecenter">
        EDIT<br/>
        <br/>
        <Button className="ui button" value={"Add Question"} onClick={()=>{window.location+="/add-question"}}/><br/>
        <Button className="ui button" value={"Add Category"} onClick={()=>{window.location+="/add-category"}}/><br/>
        <Button className="ui button" value={"View All Questions"} onClick={()=>{window.location+="/view-questions"}}/><br/>
        <Button className="ui button" value={"View All Categories"} onClick={()=>{window.location+="/view-categories"}}/><br/>
        <Button className="ui button" value={"Edit Question"} onClick={()=>{window.location+="/edit-question"}}/><br/>
        <Button className="ui button" value={"Edit Category"} onClick={()=>{window.location+="/edit-category"}}/><br/>
        <Button className="ui button" value={"Delete Question"} onClick={()=>{window.location+="/delete-question"}}/><br/>
		<Button className="ui button" value={"Delete Category"} onClick={()=>{window.location+="/delete-category"}}/>
      </div>
    );
  }
}

export default Edit;


/*
<div id="buttons" class="ui left labeled button" tabindex="0">
  		<a class="ui basic right pointing label">
    	"Category"
    	</a>
        <AddQuestion className="ui button" value={"+"}/>
        </div> 

*/