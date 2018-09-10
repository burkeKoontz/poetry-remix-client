import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {fetchPoems} from '../actions/search';

class SearchResults extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPoems());
  }

  render() {
    console.log(this.props.poems);
    const poemsHtml = this.props.poems.map(poem => {
      console.log(poem);
      return (<li>Title: {poem.title}, Author: {poem.author}</li>);
    });

    return (
      <ul>{poemsHtml}</ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    poems: state.poems
  }
}

export default connect(mapStateToProps)(SearchResults);