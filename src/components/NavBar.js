import React from 'react';
import {connect} from 'react-redux';
import { clearCurrentPoem, closePoem} from '../actions/poem';
import { clearSearching } from '../actions/search';
import { logOut } from '../actions/user';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  goHome() {
    this.props.dispatch(clearSearching());
    this.props.dispatch(clearCurrentPoem());
    this.props.dispatch(closePoem());
  }

  logOut() {
    this.props.dispatch(logOut());
  }

  render() {
    // this isn't working
    if (this.props.currentUser) {
      return (
        <ul>
          <li><Link onClick={() => this.goHome()} to={`/`} >Homepage</Link></li>
          <li><Link to={`/your-poems`} >Your poems</Link></li>
          <li>User: {`${this.props.currentUser.username}`}</li>
          <li><button onClick={() => this.logOut()}>Log-out</button></li>
        </ul>
      );
    } else {
    return (
      <ul>
        <li><Link onClick={() => this.goHome()} to={`/`} >Homepage</Link></li>
        <li><Link to={`/sign-up`} >Sign-up</Link></li>
        <li><Link to={`/log-in`} >Log-in</Link></li>
      </ul>
    );
  }
}

}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(NavBar);