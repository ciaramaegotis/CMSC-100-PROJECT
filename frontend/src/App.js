import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import Play from './Components/Play';
import AddCategory from './Components/AddCategory';
import AddQuestion from './Components/AddQuestion';
import Highscore from './Components/Highscore';
import Edit from './Components/Edit';
import ViewQuestions from './Components/ViewQuestions';
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
        <Route exact={true} path="/edit/add-question" component={AddQuestion}/>
        <Route exact={true} path="/edit/add-category" component={AddCategory}/>
        <Route exact={true} path="/edit/view-questions" component={ViewQuestions}/>
        <Route exact={true} path="/edit/view-categories" component={Home}/>
        <Route exact={true} path="/edit/edit-question" component={Home}/>
        <Route exact={true} path="/edit/edit-category" component={Home}/>
        <Route exact={true} path="/edit/delete-question" component={Home}/>
        <Route exact={true} path="/edit/delete-category" component={Home}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;

/*ViewCategories*/
/*EditQuestion*/
/*EditCategory*/
/*DeleteQuestion*/
/*DeleteCategory*/
