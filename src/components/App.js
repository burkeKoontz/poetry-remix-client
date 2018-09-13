import React from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import EditBoard from './EditBoard';
import HTML5Backend from 'react-dnd-html5-backend';
import { Route } from 'react-router-dom';
import { DragDropContext } from 'react-dnd';

class App extends React.Component {

  render() {
    return (<div>
      <Route exact path="/" component={Home} />
      <Route exact path="/board" component={EditBoard} />
    </div>);
  //  if (this.props.editingPoem) {
  //    return (
  //     //  <EditBoard />
  //     <Route exact path="/board" component={EditBoard} />
  //    );
  //  } else {
  //    return (
  //     <Route exact path="/" component={Home} />
  //     //  <Home />
  //    );
  //  }
 
  }
}

const mapStateToProps = state => {
  return {
    editingPoem: state.poem.editingPoem
  }
}

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(App));
