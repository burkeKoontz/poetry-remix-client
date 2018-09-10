import React from 'react';
import {connect} from 'react-redux';
import { fetch } from '../actions/search';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from './NavBar';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';

class Home extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <SearchForm />
        <SearchResults />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    poems: state.poems
  }
}

export default connect(mapStateToProps)(Home);