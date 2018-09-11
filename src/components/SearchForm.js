import React from 'react';
import {connect} from 'react-redux';
import {fetchPoemsFromAPI, toggleSearching } from '../actions/search';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {authorSearchTerm: '', titleSearchTerm: ''}
  }

  setSearch(e, searchTerms) {
    e.preventDefault();
    this.props.dispatch(toggleSearching());
    this.props.dispatch(fetchPoemsFromAPI(searchTerms));
  }

  setInput(type, input) {
    this.setState({...this.state, [type] : input})
  }

  render() {
    return (
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
    );
  }
}

export default connect()(SearchForm);