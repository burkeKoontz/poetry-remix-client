import React from 'react';
import {connect} from 'react-redux';
import { clearCurrentPoem, closePoem} from '../actions/poem';
import { clearSearching } from '../actions/search';
import { clearAuth } from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import { Link } from 'react-router-dom';
import { clearMagnets } from '../actions/magnet';
import './NavBar.css';

class NavBar extends React.Component {
  goHome() {
    this.props.dispatch(clearSearching());
    this.props.dispatch(clearCurrentPoem());
    this.props.dispatch(closePoem());
    this.props.dispatch(clearMagnets());
  }

  clearData() {
    this.props.dispatch(clearMagnets());
  }

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // this isn't working
    if (this.props.currentUser) {
      return (
        <nav>
          <h1><Link onClick={() => this.goHome()} to={`/`} >Poetry Remix</Link></h1>
          <ul className="navbar" role="navigation">
            <li className="navitem"><Link onClick={() => this.goHome()} to={`/`} >Home</Link></li>
            <li className="navitem"><Link onClick={() => this.clearData()} to={`/your-poems`} >Your poems</Link></li>
            <li className="navitem green">User: {`${this.props.currentUser.username}`}</li>
            <li className="navitem"><button className="button" onClick={() => this.logOut()}>Log-out</button></li>
          </ul>
        </nav>
      );
    } else {
    return (
      <nav>
        <h1><Link onClick={() => this.goHome()} to={`/`} >Poetry Remix</Link></h1>
        <ul className="navbar" role="navigation">
          <li className="navitem"><Link onClick={() => this.goHome()} to={`/`} >Home</Link></li>
          <li className="navitem"><Link to={`/sign-up`} >Sign-up</Link></li>
          <li className="navitem"><Link to={`/log-in`} >Log-in</Link></li>
        </ul>
      </nav>
    );
  }
}

}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(NavBar);