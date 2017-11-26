import React, { Component } from 'react';

class SubmitScore extends Component{
  constructor(props){
    super(props);
    this.state = {
      score = 0,
      name = ""
    }
  }

  render(){
    return(
      <div>
        <div>your score is {this.state.score}</div>
        <input type="text" placeholder="You name">
      </div>
    );
  }
}

export default SubmitScore;
