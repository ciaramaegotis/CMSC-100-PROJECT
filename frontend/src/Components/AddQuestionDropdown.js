import React, { Component } from 'react';
import './../App.css';
import Button from './Button';
class AddQuestionDropdown extends Component {
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

  render() {
    return (
      <div>
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
          +
          <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item">
              <div class="ui big input">
              <input type="text" placeholder="Question" onChange={this.questionHandler}/>
              </div></div>

              <div class="item">
              <div class="ui big input">
              <input type="text" placeholder="Type" onChange={this.typeHandler}/>
              </div></div>
              

              <div class="item">
              <div class="ui big input">
              <input type="text" placeholder="Difficulty" onChange={this.difficultyHandler}/>
              </div></div>
              

              <div class="item">
              <div class="ui big input">
              <input type="text" placeholder="Category" onChange={this.categoryHandler}/>
              </div></div>


              <div class="item">
              <div class="ui big input">
              <input type="text" placeholder="Correct Answer" onChange={this.answerHandler}/>
              </div></div>

              <div class="item">
              <div class="ui big input">
              <input type="text" placeholder="Choices" onChange={this.choicesHandler}/>
              </div></div>
              <Button className="ui button" value={"Submit"}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddQuestionDropdown;
