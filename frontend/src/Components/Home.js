import React, { Component } from 'react';
import Button from './Button.js'
class Home extends Component {
  render() {
    return (
      <div>
      <Button value={"Play"} onClick={()=>{window.location="/play"}}/>
      <Button value={"High Score"} onClick={()=>{window.location="/highscore"}}/>
      <Button value={"Edit"} onClick={()=>{window.location="/edit"}}/>
      </div>
    );
  }
}

export default Home;
