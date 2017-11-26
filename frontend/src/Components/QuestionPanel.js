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
      answered: false
    }
    this.checker = this.checker.bind(this);
  }
  checker(e){
    this.setState({answered:true},()=>{
      if(this.state.answer===e){
        console.log("Correct");
      }else{
        console.log("Wrong");
      }
    });
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
          {(this.state.type==="Text Answer"||this.state.type==="Number Answer")&&
            <div>
              <input type="text" placeholder={this.state.type==="Text Answer"? 'text':'number'}></input>
              <Button className="large ui button" value={"Submit"}/>
            </div>
          }
        </div>
      </div>
    );
  }
}
export default QuestionPanel;
