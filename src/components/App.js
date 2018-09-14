import React from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import EditBoard from './EditBoard';
import HTML5Backend from 'react-dnd-html5-backend';
import { Route, withRouter} from 'react-router-dom';
import { DragDropContext } from 'react-dnd';
import FinishedPoem from './FinishedPoem';
import NavBar from './NavBar';
import SignUp from './SignUp';
import LogIn from './LogIn';
import UserPoems from './UserPoems';

class App extends React.Component {

  render() {
     return (<div>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/log-in" component={LogIn} />
      <Route exact path="/board" component={EditBoard} />
      <Route exact path="/your-poems" component={UserPoems} />
      <Route exact path="/poems/:id" component={FinishedPoem} />
    </div>);
  }
}

export default withRouter(DragDropContext(HTML5Backend)(connect()(App)));
