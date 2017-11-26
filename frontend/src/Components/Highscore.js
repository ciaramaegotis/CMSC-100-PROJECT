import React, { Component } from 'react';
class Highscore extends Component {
  constructor(props){
    super(props);
    this.state={
      highscorelist: [{name:"Ian",score:100},{name:"Norv",score:90},{name:"AHH",score:300}]
    }
    this.sorthighscore = this.sorthighscore.bind(this);
  }

  componentDidMount() {
      this.sorthighscore(this.state.highscorelist);
      fetch('http://localhost:3001/Highscores/gethighscores')
      .then((response)=> {return response.json() })
      .then((result) => { this.setState({highscorelist: result});
      console.log(result);
    })
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
