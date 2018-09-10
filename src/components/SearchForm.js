import React from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { setSearchTerm } from '../actions/search';
import Form from './Form';

class SearchForm extends React.Component {

  render() {
    return (
      <div>
        <Form label={'Search by title'} id={'byTitle'} />
        <Form label={'Search by author'} id={'byAuthor'} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    poems: state.poems
  }
}

export default connect(mapStateToProps)(SearchForm);