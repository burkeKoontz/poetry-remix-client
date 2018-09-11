import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';

class Home extends React.Component {

  render() {
    if (this.props.searching) {
      return (
        <div>
          <NavBar />
          <SearchForm />
          <SearchResults />
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
    searching: state.search.searching
  }
}


export default connect(mapStateToProps)(Home);