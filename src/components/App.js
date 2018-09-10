import React from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import Board from './Board';

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

export default connect(mapStateToProps)(App);