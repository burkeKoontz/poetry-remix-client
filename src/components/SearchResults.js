import React from 'react';
import {connect} from 'react-redux';
import SearchResult from './SearchResult';

class SearchResults extends React.Component {

  render() {
    if (this.props.poems.status === 404 ) {
      return <p>Not found. Try searching for something else</p>;
    } else if (this.props.poems.length !== 0) {
        const poemsHtml = this.props.poems.map((poem, index) => {
        return <li key={index}><SearchResult title={poem.title} author={poem.author} poem={poem} /></li>;
        });
        return <ul>{poemsHtml}</ul>;
    } else if (this.props.searching) {
      return <p className="spaced">Poems incoming</p>
    } else {
      return <p>Search for poems</p>;
    }
  }
}

const mapStateToProps = state => {
  return {
    searching: state.search.searching,
    poems: state.search.poems
  }
}

export default connect(mapStateToProps)(SearchResults);