import React, { Component } from 'react';
import './CSS/Home.css';
import Button from './Button.js';
import './../../semantic/dist/semantic.min.css';

class Highscore extends Component {
  constructor(props){
    super(props);
    this.state={
      highscorelist: []
    }
    this.sorthighscore = this.sorthighscore.bind(this);
  }

  componentDidMount() {
      fetch('http://localhost:3001/quizgame/viewHighScore')
      .then((response)=> {return response.json() })
      .then((result) => {this.setState({highscorelist: result})})
      .then(() => {this.sorthighscore(this.state.highscorelist);})
      // .then(() => {console.log(this.state.highscorelist)})
       
      .catch((e) => {console.log(e); });
  }

  sorthighscore(e){
    const temphighscore = e;
    temphighscore.sort(function(a,b){
      return b.score-a.score
    });
    console.log(this.state.highscorelist);
    this.setState({highscorelist:temphighscore});
  }
  render() {
    return (
      <div id = "table">
      <HighscoreTable value={this.state.highscorelist}/>
      </div>
    );
  }
}

export default Highscore;

class HighscoreTable extends Component{

  render(){
    return(
      <table id = "table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {
          this.props.value.map(
                (item,index)=>{
                  return(
                    <tr key={index} id = "trpadding">
                        <th>{item.name}</th>
                        <th>{item.score}</th>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </tr>
                  )
                }
              )
        }
        <button id = "hsButton" className = "massive ui inverted button" onClick = {()=>{window.location = "/"}}> back to Menu </button>
      </tbody>
      </table>
    )

    }
}
