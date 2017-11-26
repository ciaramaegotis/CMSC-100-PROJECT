import React, { Component } from 'react';
import QuestionPanel from './QuestionPanel';
class Game extends Component {
  constructor(props){
    super(props);
      this.state={
        start: false,
        category1:this.props.match.params.cat1,
        category2:this.props.match.params.cat2,
        category3:this.props.match.params.cat3,
        noq:this.props.match.params.noq,
        questionlist:[],
        score:0
      }
      this.addScore=this.addScore.bind(this);
    }
    componentDidMount() {

      fetch(`http://localhost:3001/quizgame/getquiz/category1=${this.state.category1}&category2=${this.state.category2}&category3=${this.state.category3}&count=${this.state.noq}`)
      .then((response)=> {return response.json() })
      .then((result) => { this.setState({questionlist: result},()=>{this.setState({start:true})}
      );
    })
    .catch((e) => {console.log(e); });
    }
  addScore(val){
    this.setState({score:this.state.score+val},()=>{
          console.log(this.state.score);
    });

  }
  render() {
    return (
      <div className="Game">
          {this.state.start===true&&
            <div>
            {this.state.questionlist.map((choice,i) => {
              return (
              <QuestionPanel key={i} data={this.state.questionlist[i]} sendCorrect={this.addScore}/>
              )
            })}
            </div>
          }
    </div>
    );
  }
}

export default Game;
