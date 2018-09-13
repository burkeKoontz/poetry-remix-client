import React from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import EditBoard from './EditBoard';
import HTML5Backend from 'react-dnd-html5-backend';
import { Route } from 'react-router-dom';
import { DragDropContext } from 'react-dnd';
import FinishedPoem from './FinishedPoem';
import NavBar from './NavBar';

class App extends React.Component {

  render() {
   if (this.props.editingPoem) {
     return (
       <EditBoard />
     );
   } else {
     return (<div>
      <Route path="/" component={Home} />
      {/* <Route path="/" component={NavBar} /> */}
      <Route exact path="/poems/:id" component={FinishedPoem} />
    </div>);
   }
 
  }
}

const mapStateToProps = state => {
  return {
    editingPoem: state.poem.editingPoem
  }
}

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(App));
