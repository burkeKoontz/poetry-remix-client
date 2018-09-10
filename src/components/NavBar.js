import React from 'react';
import {connect} from 'react-redux';
import { clearCurrentPoem } from '../actions/poem';

class NavBar extends React.Component {
  goHome() {
    this.props.dispatch(clearCurrentPoem());
  }

  render() {
    return (
      <ul>
        <li onClick={() => this.goHome()} >Homepage</li>
        <li>Your poems</li>
        <li>testUser: User</li>
        <li>Logout</li>
      </ul>
    );
  }

}


export default connect()(NavBar);