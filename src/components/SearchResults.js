import React from 'react';
import {connect} from 'react-redux';
import {setCurrentPoem} from '../actions/poem';
import PoemResult from './PoemResult';

class SearchResults extends React.Component {

  render() {
    if (this.props.poems.status === 404 ) {
      return (<p>Not found. Try searching again</p>);
    } 
    if (this.props.poems.length !== 0) {
      console.log(this.props);
      const poemsHtml = this.props.poems.map(poem => {
        return <li><PoemResult title={poem.title} author={poem.author} poem={poem} /></li>;
      });
    console.log(poemsHtml);
      return (
        <ul>{poemsHtml}</ul>
      );
    } else {
   return (<p>Search for poems</p>);
    }
  }
}

const mapStateToProps = state => {
  return {
    poems: state.search.poems
  }
}

export default connect(mapStateToProps)(SearchResults);