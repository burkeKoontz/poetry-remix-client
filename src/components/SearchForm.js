import React from 'react';
import {connect} from 'react-redux';
import {fetchPoemsFromAPI, startSearching, toggleSearchForm } from '../actions/search';
import { clearSuccess } from '../actions/poem';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {authorSearchTerm: '', titleSearchTerm: ''}
  }

  setSearch(e, searchTerms) {
    e.preventDefault();
    this.props.dispatch(clearSuccess());
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
        <div className='searchForm'>
          <form name="search-form" className="spaced" onSubmit={(e) => this.setSearch(e, this.state)}>
            <div className="inline-block">
              <label className="spaced" htmlFor='byTitle'>Search by title</label>
              <input className="spaced" onChange={(e) => this.setInput('titleSearchTerm', e.target.value)} id='byTitle'></input>
            </div>
            <p className="inline-block">AND/OR</p>
            <div className="inline-block">
              <label className="spaced" htmlFor='byAuthor'>Search by author</label>
              <input className="spaced" onChange={(e) => this.setInput('authorSearchTerm', e.target.value)} id='byAuthor'></input>
            </div>
            <div>
              <button className="button">Search</button>
            </div>
          </form>
          <button className="button" onClick={() => this.toggleSearchForm()}>Close search form</button>
        </div>
    );
  } else {
    return (
      <div className='searchForm'>
        <p>Search for public domain poetry to remix!</p>
        <button className="button" onClick={() => this.toggleSearchForm()}>Open search form</button>
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