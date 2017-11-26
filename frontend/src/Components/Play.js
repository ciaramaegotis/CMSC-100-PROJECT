import React, { Component } from 'react';
import QuestionPanel from './QuestionPanel';
class Play extends Component {
  render() {
    return (
      <div>
      <input type="text" placeholder="Insert Number of Questions"/>
      <input type="submit" value="Submit"/>
      <QuestionPanel />
      </div>
    );
  }
}

export default Play;
