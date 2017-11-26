import React, { Component } from 'react';
import Button from './Button.js';
import './../../semantic/dist/semantic.min.css';
class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <header>
          <h1>General Quiz Game</h1>
        </header>
        <div className="ui three item menu">
          <Button className="ui button" value={"Play"} onClick={()=>{window.location="/play"}}/>
          <Button className="ui button" value={"High Score"} onClick={()=>{window.location="/highscore"}}/>
          <Button className="ui button" value={"Edit"} onClick={()=>{window.location="/edit"}}/>
        </div>
      </div>
    );
  }
}

export default Home;
