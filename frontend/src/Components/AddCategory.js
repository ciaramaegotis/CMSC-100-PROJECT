import React, { Component } from 'react';
import './../App.css';
import Button from './Button';
class AddCategory extends Component {
	constructor(props){
    	super(props);
		this.state={
		  question:"",
		  type:"",
		  difficulty:"",
		  category:"",
		  answer:"",
		  choices:"",
		}
    this.questionHandler = this.questionHandler.bind(this);
    this.typeHandler = this.typeHandler.bind(this);
    this.difficultyHandler = this.difficultyHandler.bind(this);
    this.categoryHandler = this.categoryHandler.bind(this);
    this.answerHandler = this.answerHandler.bind(this);
    this.choicesHandler = this.choicesHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  questionHandler(e){
    this.setState({question:e.target.value});
  }
  typeHandler(e){
    this.setState({type:e.target.value});
  }
  difficultyHandler(e){
    this.setState({difficulty:e.target.value});
  }
  categoryHandler(e){
    this.setState({category:e.target.value});
  }
  answerHandler(e){
    this.setState({answer:e.target.value});
  }
  choicesHandler(e){
    this.setState({choices:e.target.value});
  }

  clickHandler(){
    /*Submit*/
  }

  render() {
    return (
      <div id="makecenter"> 
              <div id="buttons" class="ui big input">
              <input type="text" placeholder="Category" onChange={this.categoryHandler}/>
              </div><br/>
              <fieldset id="buttons">
                <div id="buttons" class="ui big input">
                <input type="text" placeholder="Question" onChange={this.questionHandler}/>
                </div><br/>
                <div id="buttons" class="ui big input">
                <input type="text" placeholder="Type" onChange={this.typeHandler}/>
                </div><br/>
                <div id="buttons" class="ui big input">
                <input type="text" placeholder="Difficulty" onChange={this.difficultyHandler}/>
                </div><br/>
                <div id="buttons" class="ui big input">
                <input type="text" placeholder="Correct Answer" onChange={this.answerHandler}/>
                </div><br/>
                <div id="buttons" class="ui big input">
                <input type="text" placeholder="Choices" onChange={this.choicesHandler}/>
                </div><br/>
                <Button className="ui button" value={"Submit"} onClick={this.clickHandler}/>
              </fieldset>
      </div>
    );
  }
}

export default AddCategory;
