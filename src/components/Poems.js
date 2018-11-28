import React from 'react';
import {connect} from 'react-redux';
import { openPoem } from '../actions/poem';
import { Link } from 'react-router-dom';
import './Poems.css';

class Poems extends React.Component {

  seePoem(poem) {
    this.props.dispatch(openPoem(poem));
  }

  render() {
    if (this.props.poems.length !== 0) {
        const poemsHtml = this.props.poems.map((poem, index) => {
          return (
            <li className="storedPoem" key={index}>
            <p className="inline-block">{`Title: ${poem.title}`}</p>
            <Link className="inline-block" onClick={() => this.seePoem(poem)} to={`/poems/${poem.id}`} >Check out {poem.title}</Link>
          </li>);
        });
      return (
        <div>
        <h2 className="centered">Poems by other users: </h2>
        <ul className="storedPoems">{poemsHtml}</ul>
        </div>
      );
    } else if (this.props.loading) {
      return <p className="spaced">Poems incoming</p>
    } else {
      return <p className="spaced">No poems stored...yet</p>;
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.poem.loading,
    poems : state.poem.poems,
  }
}

export default connect(mapStateToProps)(Poems);