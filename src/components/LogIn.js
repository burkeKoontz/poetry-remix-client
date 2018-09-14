import React from 'react';
import { logInUser } from '../actions/user';
import {Redirect} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import Input from './Input';
import {connect} from 'react-redux';
import {required} from '../validators';
import {fetchUserPoemsFromDB} from '../actions/poem';

class LogIn extends React.Component {
  onSubmit(values){
    const user = {username: values.username, password: values.password}
    return this.props.dispatch(logInUser(user)).then(() => {
      console.log(this.props.currentUser);
      this.props.dispatch(fetchUserPoemsFromDB(this.props.currentUser.id));
    });
  }

  render() {
    if (this.props.currentUser) {
      return <Redirect to="/" />;
    }

    let successMessage;
    if (this.props.submitSucceeded) {
        successMessage = (
            <div className="message message-success">
                You are now logged in
            </div>
        );
    }

    let errorMessage;
    if (this.props.error) {
        errorMessage = (
            <div className="message message-error">{this.props.error}</div>
        );
    }
        return (<div>
          <h2>Log-In</h2>
          <form onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}>
            {successMessage}
            {errorMessage}
            <label htmlFor='username'>Username</label>
            <Field name="username" id="username" type="text" component={Input} validate={[required]} />
            <label htmlFor='password'>Password</label>
            <Field name="password" id="password" type="text" component={Input} validate={[required]} />
            <button disabled={this.props.pristine || this.props.submitting} type="submit">Log-In</button>
          </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser : state.user.currentUser
  }
}

export default reduxForm({
  form: 'log-in'
})((connect(mapStateToProps)(LogIn)));

