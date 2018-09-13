import React from 'react';
import {connect} from 'react-redux';
import {setCurrentPoem} from '../actions/poem';
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {

  setCurrentPoem(poem) {
    console.log(poem);
    // const poemId = 1; //change this so that a poemID will belong to a specific user
    this.props.dispatch(setCurrentPoem(poem));
  }

  render() {
    return (<div>Title: {this.props.title}, Author: {this.props.author}
    {/* <Link onClick={() => this.setCurrentPoem(this.props.poem)} to={`/board`} >Remix this</Link> */}
    <button onClick={() => this.setCurrentPoem(this.props.poem)}>Remix this</button>
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    poems: state.search.poems
  }
}

export default connect(mapStateToProps)(SearchResult);