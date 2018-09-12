import React from 'react';
import {connect} from 'react-redux';
import {fetchPoemsFromAPI, startSearching, toggleSearchForm } from '../actions/search';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {authorSearchTerm: '', titleSearchTerm: ''}
  }

  setSearch(e, searchTerms) {
    e.preventDefault();
    this.props.dispatch(startSearching());
    this.props.dispatch(fetchPoemsFromAPI(searchTerms));
  }

  setInput(type, input) {
    this.setState({...this.state, [type] : input})
  }

  toggleSearchForm() {
    this.props.dispatch(toggleSearchForm());
  }

  render() {
    if (this.props.searchFormExtended) {
    return (
        <div>
          <form onSubmit={(e) => this.setSearch(e, this.state)}>
            <label htmlFor='byTitle'>Search by title</label>
            <input onChange={(e) => this.setInput('titleSearchTerm', e.target.value)} id='byTitle'></input>
            <p>AND/OR</p>
            <label htmlFor='byAuthor'>Search by author</label>
            <input onChange={(e) => this.setInput('authorSearchTerm', e.target.value)} id='byAuthor'></input>
            <div>
              <button>Search</button>
            </div>
          </form>
          <button onClick={() => this.toggleSearchForm()}>Close search form</button>
        </div>
    );
  } else {
    return (
      <div>
        <p>Search for your favorite public domain poetry!</p>
        <button onClick={() => this.toggleSearchForm()}>Open seach form</button>
      </div>    
    );
  }
  }
}

const mapStateToProps = state => {
  return {
    searchFormExtended: state.search.searchFormExtended
  }
}

export default connect(mapStateToProps)(SearchForm);