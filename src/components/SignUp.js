import React from 'react';
import {Redirect} from 'react-router-dom';
import { saveUserToDB } from '../actions/user';
import {reduxForm, Field} from 'redux-form';
import Input from './Input';
import {connect} from 'react-redux';
import {nonEmpty, required, passwordLength, usernameLength, isTrimmed} from '../validators';

class SignUp extends React.Component {
  onSubmit(values){
    // e.preventDefault();
    const newUser = {username: values.usernameSubmit, password: values.passwordSubmit};
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
        return (<main aria-live="assertive" role="main" className="centered">
        <div class="bg"></div>
          <h2>Sign-up</h2>
          <form className="spaced" name="sign-up-form" onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}>
            {successMessage}
            {errorMessage}
            <label htmlFor='usernameSubmit'>Username</label>
            <Field name="usernameSubmit" id="usernameSubmit" type="text" component={Input} validate={[ required, nonEmpty, usernameLength, isTrimmed]} />
            <label htmlFor='passwordSubmit'>Password</label>
            <Field name="passwordSubmit" id="passwordSubmit" type="password" component={Input} validate={[ required, nonEmpty, passwordLength, isTrimmed]} />
            <button className="button spaced" disabled={this.props.pristine || this.props.submitting} type="submit">Sign-Up</button>
          </form>
        </main>
    );
  }
}

export default reduxForm({
  form: 'sign-up'
})((connect()(SignUp)));
