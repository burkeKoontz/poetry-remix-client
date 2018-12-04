import React from 'react';
import { logInUser } from '../actions/auth';
import {Redirect} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import Input from './Input';
import {connect} from 'react-redux';
import {required} from '../validators';
import {fetchUserPoemsFromDB} from '../actions/poem';

class LogIn extends React.Component {

  componentWillMount() {
    const {reset} = this.props
    reset();
  }

  onSubmit(values){
    const user = {username: values.username, password: values.password}
    return this.props.dispatch(logInUser(user)).then(() => {
      this.props.dispatch(fetchUserPoemsFromDB(this.props.currentUser.id));
    })
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
        return (<main aria-live="assertive" role="main" className="centered">
        <div class="bg"></div>
          <h2>Log-In</h2>
          <form name="log-in-form"  className="spaced" onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}>
            {successMessage}
            {errorMessage}
            <label htmlFor='username'>Username</label>
            <Field name="username" id="username" type="text" component={Input} validate={[required]} />
            <label htmlFor='password'>Password</label>
            <Field name="password" id="password" type="password" component={Input} validate={[required]} />
            <button className="button spaced" disabled={this.props.pristine || this.props.submitting} type="submit">Log-In</button>
          </form>
          <p>Or try our demo user:</p><p>Username: demo <br /> Password: demoUser1234</p>
        </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser : state.auth.currentUser
  }
}

export default reduxForm({
  form: 'log-in'
})((connect(mapStateToProps)(LogIn)));

