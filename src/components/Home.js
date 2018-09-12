import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import Poems from './Poems';
import {fetchPoemsFromDB} from '../actions/poem'

class Home extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchPoemsFromDB());
  }

  render() {
    if (this.props.searching) {
      return (
        <div>
          <NavBar />
          <SearchForm />
          <SearchResults />
        </div>
      );
    } else if (this.props.poems.length !== 0) {
    return (
      <div>
        <NavBar />
        <SearchForm />
        <Poems />
      </div>
    );
    } else {
      return (
        <div>
          <NavBar />
          <SearchForm />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    searching: state.search.searching,
    poems: state.poem.poems
  }
}



export default connect(mapStateToProps)(Home);