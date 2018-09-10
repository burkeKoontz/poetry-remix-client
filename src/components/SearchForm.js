import React from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component {

  render() {

    return (
      <div><Route path="/" component={Home}/></div>
    );
  }
}

const mapStateToProps = state => {
  return {
    poems: state.poems
  }
}

export default connect(mapStateToProps)(App);