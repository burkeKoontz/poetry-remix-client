import React from 'react';
import {connect} from 'react-redux';
import {setCurrentPoem} from '../actions/poem';
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {

  setCurrentPoem(poem) {
    this.props.dispatch(setCurrentPoem(poem));
  }

  render() {
    return (<div>Title: {this.props.title}, Author: {this.props.author}
    <Link onClick={() => this.setCurrentPoem(this.props.poem)} to={`/board`} >Remix this</Link>
    </div>);
  }
}


export default connect()(SearchResult);