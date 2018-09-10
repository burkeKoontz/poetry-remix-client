import React from 'react';
import {connect} from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

class CheeseList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  render() {
    const cheeseHtml = this.props.cheeses.map(cheese => {
      return (<li>{cheese}</li>);
    });

    return (
      <ul>{cheeseHtml}</ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    cheeses: state.cheeses
  }
}

export default connect(mapStateToProps)(CheeseList);