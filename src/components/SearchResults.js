import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {fetchPoems} from '../actions/search';

class SearchResults extends React.Component {

  render() {
    if (this.props.poems.length !== 0) {
      const poemsHtml = this.props.poems.map(poem => {
        console.log(poem);
        return (<li>Title: {poem.title}, Author: {poem.author}</li>);
      });
  
      return (
        <ul>{poemsHtml}</ul>
      );
    } else {
   return (<p>Search for poems</p>);
    }
  }
}

const mapStateToProps = state => {
  return {
    poems: state.poems
  }
}

export default connect(mapStateToProps)(SearchResults);