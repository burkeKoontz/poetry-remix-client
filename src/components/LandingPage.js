import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { storeReturningUser } from '../actions/auth';

class LandingPage extends React.Component {
  notFirstTimeUser() {
    this.props.dispatch(storeReturningUser(this.props.dispatch));
  }

  render() {
    console.log('in landing page')
    if (!this.props.returningUser) {
      return (<div>
          <p className="spaced centered">"Immature poets imitate; mature poets steal" -T.S. Eliot.</p><p className="spaced centered"> To become a mature poet, a good thief, a bit of imitation is in order. 
          Shakespeare, Whitman, Dickinson, Wordworth...all of these great authors' poems and more can be remixed on this application, as if their words were fridge magnets on your kitchen refrigerator. 
          To get started, search for your favorite poet or poem.</p>
          <button className="spaced button" onClick={() => this.notFirstTimeUser()}>Get started</button>
        </div>)
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapStateToProps = state => {
  return {
    returningUser: state.auth.returningUser
  }
}



export default connect(mapStateToProps)(LandingPage);