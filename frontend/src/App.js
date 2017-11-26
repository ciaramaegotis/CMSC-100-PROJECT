import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import Play from './Components/Play';
import Highscore from './Components/Highscore';
import Edit from './Components/Edit';
import Game from './Components/Game';
class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/play" component={Play} />
        <Route exact={true} path="/highscore" component={Highscore} />
        <Route exact={true} path="/edit" component={Edit} />
        <Route path="/game/:cat1&:cat2&:cat3&:noq" component={Game} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
