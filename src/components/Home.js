import React from 'react';
import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import LandingPage from './LandingPage';
import SearchForm from './SearchForm';
import Poems from './Poems';
import {fetchPoemsFromDB} from '../actions/poem';

class Home extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchPoemsFromDB());
  }

  render() {
    if (!this.props.returningUser) {
      return <main aria-live="assertive" role="main"><LandingPage /></main>;
    }
    if (this.props.searching) {
      return (
        <main aria-live="assertive" role="main">
          <SearchForm />
          <SearchResults />
        </main>
      );
    } else {
      return (
        <main aria-live="assertive" role="main">
          <SearchForm />
          <Poems />
        </main>
    );
  }
} 
}

const mapStateToProps = state => {
  return {
    searching: state.search.searching,
    currentUser: state.auth.currentUser,
    returningUser: state.auth.returningUser
  }
}



export default connect(mapStateToProps)(Home);