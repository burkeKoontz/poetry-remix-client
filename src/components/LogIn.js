import React from 'react';
import {connect} from 'react-redux';
import { logInUser } from '../actions/user';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''}
  }

  saveUser(e, state){
    e.preventDefault();
    const user = {username: state.username, password: state.password}
    this.props.dispatch(logInUser(user));
    if (!this.props.error) {
      this.props.history.push('/');
    }
  }

  setInput(type, input) {
    this.setState({...this.state, [type] : input})
  }

  // refactor with redux form tomorrow?

  render() {
    if (this.props.error) {
      return <div>{this.props.error.message}</div>
    }
      return (<div>
          <h2>Log in</h2>
          <form onSubmit={(e) => this.saveUser(e, this.state)}>
            <label htmlFor='username'>Username</label>
            <input onChange={(e) => this.setInput('username', e.target.value)} id='username'></input>
            <label htmlFor='password'>Password</label>
            <input onChange={(e) => this.setInput('password', e.target.value)} id='password'></input>
            <input type="submit" value="Log-in"></input>
          </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error : state.user.error,
  }
}

export default connect(mapStateToProps)(LogIn);