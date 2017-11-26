import React, { Component } from 'react';


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

    console.log(this.state.highscorelist + "\n\n\n\n\n\n\n");
    return (
      <div>
      <HighscoreTable value={this.state.highscorelist}/>
      <button onClick={this.sorthighscore}>Sort</button>
      </div>
    );
  }
}

export default Highscore;

class HighscoreTable extends Component{

  render(){
    return(
      <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {
          this.props.value.map(
                (item,index)=>{
                  return(
                    <tr key={index}>
                        <th>{item.name}</th>
                        <th>{item.score}</th>
                    </tr>
                  )
                }
              )
        }
      </tbody>
      </table>
    )

    }
}
