import React from 'react';
import {connect} from 'react-redux';
import PoemResult from './PoemResult';
import { fetchPoemsFromDB } from '../actions/poem';

class CreatedPoems extends React.Component {

  render() {
    console.log(this.props.poems);
  if (this.props.poems.length !== 0) {
        const poemsHtml = this.props.poems.map((poem, index) => {
          console.log(poem.title)
        return <li key={index}><p>Title: {poem.title}</p></li>;
      });
      return (
        <ul>{poemsHtml}</ul>
      );
    } else if (this.props.searching) {
      return <p>Poems incoming</p>
    } else {
      return (<p>No poems stored on application</p>);
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.poem.loading,
    poems : state.poem.poems
  }
}

export default connect(mapStateToProps)(CreatedPoems);