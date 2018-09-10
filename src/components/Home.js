import React from 'react';
import {connect} from 'react-redux';
import { fetch } from '../actions/search';
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


export default connect()(Home);