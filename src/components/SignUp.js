import React from 'react';
import {Redirect} from 'react-router-dom';
import { saveUserToDB } from '../actions/user';
import {reduxForm, Field} from 'redux-form';
import Input from './Input';
import {nonEmpty, required, passwordLength, usernameLength, isTrimmed} from '../validators';

class SignUp extends React.Component {
  onSubmit(values){
    // e.preventDefault();
    const newUser = {username: values.username, password: values.password}
    return this.props.dispatch(saveUserToDB(newUser));
  }

  render() {
    let successMessage;
    if (this.props.submitSucceeded) {
        return <Redirect to="/log-in" />;
    }

    let errorMessage;
    if (this.props.error) {
        errorMessage = (
            <div className="message message-error">{this.props.error}</div>
        );
    }
        return (<div>
          <h2>Sign-up</h2>
          <form onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}>
            {successMessage}
            {errorMessage}
            <label htmlFor='username'>Username</label>
            <Field name="username" id="username" type="text" component={Input} validate={[ required, nonEmpty, usernameLength]} />
            <label htmlFor='password'>Password</label>
            <Field name="password" id="password" type="text" component={Input} validate={[required, nonEmpty, passwordLength]} />
            <button disabled={this.props.pristine || this.props.submitting} type="submit">Sign-Up</button>
          </form>
        </div>
    );
  }
}

export default reduxForm({
  form: 'sign-up'
})(SignUp);
