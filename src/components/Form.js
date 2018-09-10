import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { fetchPoems } from '../actions/search';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {input: ''}
  }

  setSearch(e, searchTerm) {
    const searchBy = this.props.id;
    e.preventDefault();
    console.log(searchTerm);
    this.props.dispatch(fetchPoems(searchBy, searchTerm))
  }

  setInput(input) {
    this.setState({input})
  }

  render() {

    return (
      <form onSubmit={(e) => this.setSearch(e, this.state.input)}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input onChange={(e) => this.setInput(e.target.value)} id={this.props.id}></input>
        <button>Search</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    poems: state.poems
  }
}

export default connect(mapStateToProps)(Form);