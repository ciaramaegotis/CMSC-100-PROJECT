import React, { Component } from 'react';
import Button from './Button';
import './../../semantic/dist/semantic.min.css';
class QuestionPanel extends Component {
  constructor(props){
    super(props);
    this.state={
      question:this.props.data.question,
      type:this.props.data.type,
      difficulty:this.props.data.difficulty,
      category:this.props.data.category,
      answer:this.props.data.answer,
      choices:this.props.data.choices,
      givenanswer: "",
      answered: false,
      correct: false
    }
    this.checker = this.checker.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  checker(e){
    this.setState({answered:true},()=>{
      if(this.state.type==="True or False"||this.state.type==="Multiple Choice"){
        if(this.state.answer===e){
          this.setState({correct:true});
          console.log("Correct");
          this.props.sendCorrect(5);
        }else{
          this.setState({correct:false});
          console.log("Wrong");
        }
      }else{
        if(this.state.givenanswer.toLowerCase()===this.state.answer.toLowerCase()){
          this.setState({correct:true});
          console.log("Correct");
        }else{
          this.setState({correct:false});
          console.log("Wrong");
        }
      }
    });
  }
  inputChangeHandler(e){
    this.setState({givenanswer:e.target.value});
  }
  render() {
    return (
      <div className="ui large centered card">
        <div className="content">
          <div className="ui justified container">
            {this.state.question}
          </div>
        </div>
        <div className="extracontent">
        {/*ForTrueOrFalse types*/}
          {((this.state.type==="True or False"||this.state.type==="Multiple Choice")&&this.state.answered === false) &&
            <div className="fluid ui buttons">
              {this.state.choices.map((choice,i) => {
                return (
                <Button key={i} onClick={()=>{this.checker(choice)}} className="large ui button" value={choice}/>
                )
              })}
            </div>
          }
          {/*For Text Input types*/}
          {((this.state.type==="Text Answer"||this.state.type==="Number Answer")&&this.state.answered===false)&&
            <div className="ui action input">
              <input value={this.state.givenanswer} onChange={this.inputChangeHandler}type="text" placeholder={this.state.type==="Text Answer"? 'text':'number'}></input>
              <Button className="large ui button" onClick={this.checker}value={"Submit"}/>
            </div>
          }
        </div>
      </div>
    );
  }
}


export default QuestionPanel;
