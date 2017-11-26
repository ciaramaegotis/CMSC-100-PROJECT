import React, { Component } from 'react';
import './CSS/Home.css';
import Button from './Button.js';
import './../../semantic/dist/semantic.min.css';
import './../App.css';
class Edit extends Component {
  constructor(props){
    super(props);
    this.state = {
      categoriesList: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:3001/quizgame/getCategories')
    .then((response)=> {return response.json() })
      .then((result) => {this.setState({categoriesList: result})})
      .then(() => {console.log(this.state.categoriesList)}) 
      .catch((e) => {console.log(e); });
  }
  render() {
    return (
      <div id="makecenter">
        <br/>
        <br/>
        <br/>
        <br/>
        <label id = "labelDesign2"> EDIT </label> <br/>
        <br/>
        <div className = "ui cards">
        {
          this.state.categoriesList.map(
                (item,index)=>{
                  return(
                    <div className ="card">
                      <div className="content">
                        <div className ="header">{item}</div>
                        <div className ="meta">{item}</div>
                        <div className ="description">
                          <div className ="ui three buttons">
                            <div className ="ui basic blue button"><i className ="unhide icon"></i></div>
                            <div className ="ui basic green button"><i className ="edit icon"></i></div>
                            <div className ="ui basic red button"><i className ="remove circle icon"></i></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              )
        }
        <div className ="card">
                      <div className="content">
                        <div className ="header"><button className = "ui button">+</button></div>
                        <div className ="meta">New Category</div>
                        <div className ="description">
                        </div>
                      </div>
                    </div>
        </div>
        <Button className="ui button" value={"Add Question"} onClick={()=>{window.location+="/add-question"}}/><br/>
        <Button className="ui button" value={"Add Category"} onClick={()=>{window.location+="/add-category"}}/><br/>
        <Button className="ui button" value={"View All Questions"} onClick={()=>{window.location+="/view-questions"}}/><br/>
        <Button className="ui button" value={"View All Categories"} onClick={()=>{window.location+="/view-categories"}}/><br/>
        <Button className="ui button" value={"Edit Question"} onClick={()=>{window.location+="/edit-question"}}/><br/>
        <Button className="ui button" value={"Edit Category"} onClick={()=>{window.location+="/edit-category"}}/><br/>
        <Button className="ui button" value={"Delete Question"} onClick={()=>{window.location+="/delete-question"}}/><br/>
		<Button className="ui button" value={"Delete Category"} onClick={()=>{window.location+="/delete-category"}}/>
      <button id = "menuButton" className = "massive ui inverted button" onClick = {()=>{window.location="/"}}> Back to Menu </button>
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