import React from 'react';
import {connect} from 'react-redux';
import { clearCurrentPoem, closePoem} from '../actions/poem';
import { clearSearching } from '../actions/search';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  goHome() {
    this.props.dispatch(clearSearching());
    this.props.dispatch(clearCurrentPoem());
    this.props.dispatch(closePoem());
  }

  render() {
    return (
      <ul>
        <li><Link onClick={() => this.goHome()} to={`/`} >Homepage</Link></li>
        <li>Your poems</li>
        <li>testUser: User</li>
        <li>Logout</li>
      </ul>
    );
  }

}

export default connect()(NavBar);