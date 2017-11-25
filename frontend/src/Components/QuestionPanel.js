import React, { Component } from 'react';
import Button from './Button';
class QuestionPanel extends Component {
  constructor(props){
    super(props);
    this.state={
      questiondata: {question:"a, b, c, d?",type:"Math",difficulty:"easy",category:"Logic",answer:"a",choices:["a","b","c","d"]}
    }
  }

  render() {
    return (
      <div className="QuestionPanel">
        <div className="questioncard">{this.state.questiondata.question}</div>
        <div className="choices">
        <Button value={this.state.questiondata.choices[0]}/>
        <Button value={this.state.questiondata.choices[1]}/>
        <Button value={this.state.questiondata.choices[2]}/>
        <Button value={this.state.questiondata.choices[3]}/>
        </div>
      </div>
    );
  }
}

export default QuestionPanel;
