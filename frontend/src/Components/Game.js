import React, { Component } from 'react';
import QuestionPanel from './QuestionPanel';
import Button from './Button';
var sleep = require('sleep');
class Game extends Component {
  constructor(props){
    super(props);
      this.state={
        start: false,
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
      this.start = this.start.bind(this);
    }
    componentDidMount() {

      fetch(`http://localhost:3001/quizgame/getquiz/category1=${this.state.category1}&category2=${this.state.category2}&category3=${this.state.category3}&count=${this.state.noq}`)
      .then((response)=> {return response.json() })
      .then((result) => { this.setState({questionlist: result},()=>{this.setState({start:true})}
      );
    })
    .catch((e) => {console.log(e); });
    console.log("After Didmount");
    console.log(this.state.questionlist);
    }

    nextQuestionHandler(){
      if(this.state.questionNo<this.state.questionlist.length-1){
          this.setState({questionNo:this.state.questionNo+1});
      }
    }
    prevQuestionHandler(){
      if(this.state.questionNo>0){
        this.setState({questionNo:this.state.questionNo-1});
      }
      console.log(this.state.questionlist);

    }
    start(){
      this.setState({start:true});
    }
  render() {
    return (
      <div className="Game">
          <Button value="Prev" onClick={this.prevQuestionHandler}/>
          <Button value="Next" onClick={this.nextQuestionHandler}/>
          {this.state.start===true&&
            <div>
              <QuestionPanel data={this.state.questionlist[0]}/>
              <QuestionPanel data={this.state.questionlist[1]}/>
              <QuestionPanel data={this.state.questionlist[2]}/>          }
            </div>
          }
    </div>
    );
  }
}

export default Game;
