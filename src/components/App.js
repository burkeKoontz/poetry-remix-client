import React from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import Board from './Board';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class App extends React.Component {

  render() {
   if (this.props.currentPoem) {
     return (
       <Board />
     );
   } else {
     return (
       <Home />
     );
   }
 
  }
}

const mapStateToProps = state => {
  return {
    currentPoem: state.poem.currentPoem
  }
}

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(App));
