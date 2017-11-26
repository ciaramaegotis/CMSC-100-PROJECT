import React, { Component } from 'react';
import Button from './Button';
import './../../semantic/dist/semantic.min.css';
import $ from 'jquery';
class QuestionPanel extends Component {
  constructor(props){
    super(props);
    this.state={
      questiondata: {question:"Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vita",type:"Math",difficulty:"easy",category:"Logic",answer:"a",choices:["adsadsad","b","c","d"]}
    }
  }

  render() {
    return (
      <div className="ui large centered card">
        <div className="content">
          <div className="ui justified container">
            {this.state.questiondata.question}
          </div>
        </div>
        <div className="extracontent">
          <div className="fluid ui buttons">
            <Button className="large ui button" value={this.state.questiondata.choices[0]}/>
            <Button className="large ui button" value={this.state.questiondata.choices[1]}/>
            <Button className="large ui button" value={this.state.questiondata.choices[2]}/>
            <Button className="large ui button" value={this.state.questiondata.choices[3]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionPanel;
