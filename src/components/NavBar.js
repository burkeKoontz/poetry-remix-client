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
    console.log(this.props.token)
    return (
      <ul>
        <li><Link onClick={() => this.goHome()} to={`/`} >Homepage</Link></li>
        <li>Your poems</li>
        <li>User: {`${this.props.token}`}</li>
        <li><Link to={`/sign-up`} >Sign-up</Link></li>
        <li><Link to={`/log-in`} >Log-in</Link></li>
      </ul>
    );
  }

}

const mapStateToProps = state => {
  return {
    token: state.user.token
  }
}

export default connect(mapStateToProps)(NavBar);