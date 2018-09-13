import React from 'react';
import {connect} from 'react-redux';
import { saveUserToDB } from '../actions/user';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''}
  }

  saveUser(e, state){
    e.preventDefault();
    const newUser = {username: state.username, password: state.password}
    this.props.dispatch(saveUserToDB(newUser));
    if (!this.props.error) {
      this.props.history.push('/log-in')
    }
  }

  setInput(type, input) {
    this.setState({...this.state, [type] : input})
  }

  // refactor with redux form tomorrow?

  render() {
        return (<div>
          <h2>Sign-up</h2>
          <form onSubmit={(e) => this.saveUser(e, this.state)}>
            <label htmlFor='username'>Username</label>
            <input onChange={(e) => this.setInput('username', e.target.value)} id='username'></input>
            <label htmlFor='password'>Password</label>
            <input onChange={(e) => this.setInput('password', e.target.value)} id='password'></input>
            <input type="submit" value="Sign-up"></input>
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

export default connect(mapStateToProps)(SignUp);