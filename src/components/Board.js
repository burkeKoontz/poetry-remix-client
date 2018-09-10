import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';

class Board extends React.Component {

  render() {
    const linesHTML = this.props.currentPoem.lines.map(line => {
      return <li>{line}</li>
    });
    
    return (
      <div>
        <NavBar />
      <p>{linesHTML}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPoem: state.poem.currentPoem
  }
}

export default connect(mapStateToProps)(Board);