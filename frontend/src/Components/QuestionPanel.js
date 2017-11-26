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
      choices:this.props.data.choices}
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
          {this.state.type==="True or False" &&
            <div className="fluid ui buttons">
              {this.state.choices.map((choice,i) => {
                return (
                <Button key={i}className="large ui button" value={choice}/>
                )
              })}
            </div>
          }
          {/*For MultipleChoice*/}
          {this.state.type==="Multiple Choice"&&
            <div className="fluid ui buttons">
              {this.state.choices.map((choice,i) => {
                return (
                <Button key={i} className="large ui button" value={choice}/>
                )
              })}
            </div>
          }
          {/*For Text Input types*/}
          {this.state.type==="Text Answer"&&
            <div>
              <input type="text"></input>
              <Button className="large ui button" value={"Submit"}/>
            </div>
          }
        </div>
      </div>
    );
  }
}
QuestionPanel.defaultProps={};
export default QuestionPanel;
