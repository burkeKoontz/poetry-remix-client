import React from 'react';
import {connect} from 'react-redux';
import {setCurrentPoem} from '../actions/poem';

class SearchResult extends React.Component {

  setCurrentPoem(poem) {
    // const poemId = 1; //change this so that a poemID will belong to a specific user
    this.props.dispatch(setCurrentPoem(poem));
  }

  render() {
    return (<div>Title: {this.props.title}, Author: {this.props.author}<button onClick={() => this.setCurrentPoem(this.props.poem)}>Remix this</button></div>);
  }
}

const mapStateToProps = state => {
  return {
    poems: state.search.poems
  }
}

export default connect(mapStateToProps)(SearchResult);