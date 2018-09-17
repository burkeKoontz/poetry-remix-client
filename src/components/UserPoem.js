import React from 'react';
import {connect} from 'react-redux';
import {setCurrentPoem, deletePoemByID} from '../actions/poem';
import { Link } from 'react-router-dom';

class UserPoem extends React.Component {

  setCurrentPoem(poem) {
    this.props.dispatch(setCurrentPoem(poem));
  }

  deletePoem(id) {
    this.props.dispatch(deletePoemByID(id))
  }

  render() {
    console.log(this.props.poem);
    return (<div>
      <p>{`Title: ${this.props.poem.title}`}</p>
      <Link to={`/poems/${this.props.poem.id}`} >Show Completed Poem</Link>
      <Link onClick={() => this.setCurrentPoem(this.props.poem)} to={`/board`} >Edit this poem</Link>
      <button onClick={() => this.deletePoem(this.props.poem.id)}>Delete poem</button>
    </div>);
  }
}

export default connect()(UserPoem);