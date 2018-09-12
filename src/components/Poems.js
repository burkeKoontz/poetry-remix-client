import React from 'react';
import {connect} from 'react-redux';
import { openPoem } from '../actions/poem';
import FinishedPoem from './FinishedPoem';

class Poems extends React.Component {

  seePoem(poem) {
    this.props.dispatch(openPoem(poem));
  }

  render() {
    if (this.props.openPoem) {
      return <FinishedPoem poem={this.props.openPoem} />;
    } else if (this.props.poems.length !== 0) {
        const poemsHtml = this.props.poems.map((poem, index) => {
        return <li key={index}><p>Title: {poem.title}</p><button onClick={() => this.seePoem(poem)}>Check out this poem</button></li>;
      });
      return (
        <ul>{poemsHtml}</ul>
      );
    } else if (this.props.loading) {
      return <p>Poems incoming</p>
    } else {
      return (<p>No poems stored on application</p>);
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.poem.loading,
    poems : state.poem.poems,
    openPoem : state.poem.openPoem
  }
}

export default connect(mapStateToProps)(Poems);