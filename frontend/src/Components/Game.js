import React, { Component } from 'react';
import QuestionPanel from './QuestionPanel';
import Button from './Button';
class Game extends Component {
  constructor(props){
    super(props);
      this.state={
        category1:this.props.match.params.cat1,
        category2:this.props.match.params.cat2,
        category3:this.props.match.params.cat3,
        noq:this.props.match.params.noq,
        questionNo: 0,
        questionlist:[],
        question:{}
      }
      this.nextQuestionHandler =   this.nextQuestionHandler.bind(this);
      this.prevQuestionHandler =   this.prevQuestionHandler.bind(this);
    }
    componentDidMount() {
      fetch(`http://localhost:3001/quizgame/getquiz/category1=${this.state.category1}&category2=${this.state.category2}&category3=${this.state.category3}&count=${this.state.noq}`)
      .then((response)=> {return response.json() })
      .then((result) => { this.setState({questionlist: result},()=>{this.setState({question: this.state.questionlist[0][0]})}
    );
    })
    .catch((e) => {console.log(e); });
    }
    nextQuestionHandler(){
      if(this.state.questionNo<this.state.questionlist.length-1){
          this.setState({questionNo:this.state.questionNo+1},()=>{
          console.log(this.state.questionNo)});
      }
    }
    prevQuestionHandler(){
      if(this.state.questionNo>0){
        this.setState({questionNo:this.state.questionNo-1},()=>{
        console.log(this.state.questionNo)});
      }
      console.log(this.state.question);

    }

  render() {
    return (
      <div className="Game">
          <Button value="Prev" onClick={this.prevQuestionHandler}/>
          <Button value="Next" onClick={this.nextQuestionHandler}/>
          <QuestionPanel data={this.state.question}/>
      </div>
    );
  }
}

export default Game;
