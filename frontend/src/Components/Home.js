import React, { Component } from 'react';
import Button from './Button.js';
import './../../semantic/dist/semantic.min.css';
import $ from 'jquery';
class Home extends Component {
  render() {
    return (
      <div className='Home' id = "background">
        <header>
          <h1 id = "titleGame">Kakasa ka ba kay Ma'am Monina?</h1>
        </header>
        <div id = "center">
          <Button id = "menuButton" className="massive ui inverted button" value={"Play"} onClick={()=>{window.location="/play"}}/>
          <Button id = "menuButton" className="massive ui inverted button" value={"High Score"} onClick={()=>{window.location="/highscore"}}/>
          <Button id = "menuButton" className="massive ui inverted button" value={"Edit"} onClick={()=>{window.location="/edit"}}/>
        </div>
      </div>
    );
  }
}

export default Home;
