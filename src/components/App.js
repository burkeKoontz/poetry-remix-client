import React from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import EditBoard from './EditBoard';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class App extends React.Component {

  render() {
   if (this.props.editingPoem) {
     return (
       <EditBoard />
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
    editingPoem: state.poem.editingPoem
  }
}

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(App));
