import React from 'react';
import {connect} from 'react-redux';
import {setCurrentPoem, deletePoemByID, openPoem} from '../actions/poem';
import { Link } from 'react-router-dom';

class UserPoem extends React.Component {

  setCurrentPoem(poem) {
    this.props.dispatch(setCurrentPoem(poem));
  }

  deletePoem(id) {
    this.props.dispatch(deletePoemByID(id))
  }

  render() {
    return (<div className="spaced">
      <p className="spaced inline-block">{`Title: ${this.props.poem.title}`}</p>
      <Link className="spaced inline-block" onClick={() => this.props.dispatch(openPoem(this.props.poem))} to={`/poems/${this.props.poem.id}`} >Show Completed Poem</Link>
      <Link className="spaced inline-block" onClick={() => this.setCurrentPoem(this.props.poem)} to={`/board`} >Edit this poem</Link>
      <button className="spaced inline-block button" onClick={() => this.deletePoem(this.props.poem.id)}>Delete poem</button>
    </div>);
  }
}

export default connect()(UserPoem);