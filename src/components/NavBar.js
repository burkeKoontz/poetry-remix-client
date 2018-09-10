import React from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function NavBar() {

  return (
    <ul>
      <li>Poetry Remix</li>
      <li>Your poems</li>
      <li>testUser: User</li>
      <li>Logout</li>
    </ul>
  );

}

const mapStateToProps = state => {
  return {
    poems: state.poems
  }
}

export default connect(mapStateToProps)(NavBar);