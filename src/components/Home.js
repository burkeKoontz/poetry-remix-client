import React from 'react';
import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import Poems from './Poems';
import {fetchPoemsFromDB} from '../actions/poem';

class Home extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchPoemsFromDB());
  }

  render() {
    if (this.props.searching) {
      return (
        <div>
          <SearchForm />
          <SearchResults />
        </div>
      );
    } else {
      return (
        <div>
          <SearchForm />
          <Poems />
        </div>
    );
  }
} 
}

const mapStateToProps = state => {
  return {
    searching: state.search.searching,
    currentUser: state.auth.currentUser
  }
}



export default connect(mapStateToProps)(Home);