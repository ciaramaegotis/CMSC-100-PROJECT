import React, { Component } from 'react';
import Button from './Button.js';

class Home extends Component {
  render() {
    return (
      <div class='Home'>
        <header>
          <h1>General Quiz Game</h1>
        </header>
        <div class="buttons">
          <Button value={"Play"} onClick={()=>{window.location="/play"}}/>
          <Button value={"High Score"} onClick={()=>{window.location="/highscore"}}/>
          <Button value={"Edit"} onClick={()=>{window.location="/edit"}}/>
        </div>
      </div>
    );
  }
}

export default Home;
