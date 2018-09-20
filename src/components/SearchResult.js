import React from 'react';
import {connect} from 'react-redux';
import {setCurrentPoem} from '../actions/poem';
import { Link } from 'react-router-dom';
import './SearchResult.css';

class SearchResult extends React.Component {

  setCurrentPoem(poem) {
    this.props.dispatch(setCurrentPoem(poem));
  }

  render() {
    return (<div className="searchResult"><p className="spaced inline-block">Title: {this.props.title}, Author: {this.props.author}</p>
    <Link className="spaced inline-block" onClick={() => this.setCurrentPoem(this.props.poem)} to={`/board`} >Remix '{this.props.title}' by {this.props.author}</Link>
    </div>);
  }
}


export default connect()(SearchResult);