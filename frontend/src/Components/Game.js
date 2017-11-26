import React, { Component } from 'react';
import QuestionPanel from './QuestionPanel';
import Button from './Button';
class Game extends Component {
  constructor(props){
    super(props);
      this.state={
        questionNo: 0,
        questionlist:[
        {
          question:"Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vita",
          type:"TrueOrFalse",
          difficulty:"easy",
          category:"Logic",
          answer:"a",
          choices:["adsadsad","b","c","d"]},
          {
            question:"abcd?",
            type:"TextInput",
            difficulty:"easy",
            category:"Logic",
            answer:"a",
            choices:["adsadsad","b","c","d"]}
        ]
      }
      this.nextQuestionHandler =   this.nextQuestionHandler.bind(this);
      this.prevQuestionHandler =   this.prevQuestionHandler.bind(this);
    }
    nextQuestionHandler(){
      if(this.state.questionNo<this.state.questionlist.length-1){
          this.setState({questionNo:this.state.questionNo+1});
      }
      console.log(this.state.questionNo);
    }
    prevQuestionHandler(){
      if(this.state.questionNo>0){
        this.setState({questionNo:this.state.questionNo-1});
      }
    }

  render() {
    return (
      <div className="Game">
          <QuestionPanel data={this.state.questionlist[this.state.questionNo]}/>
          <Button value="Prev" onClick={this.prevQuestionHandler}/>
          <Button value="Next" onClick={this.nextQuestionHandler}/>
      </div>
    );
  }
}

export default Game;
