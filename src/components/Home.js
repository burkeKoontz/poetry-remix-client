import React from 'react';
import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import Poems from './Poems';
import {fetchPoemsFromDB} from '../actions/poem';
import './Home.css'

class Home extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchPoemsFromDB());
  }

  render() {
    if (this.props.searching) {
      return (
        <main>
          <SearchForm />
          <SearchResults />
        </main>
      );
    } else {
      return (
        <main>
          <SearchForm />
          <Poems />
        </main>
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