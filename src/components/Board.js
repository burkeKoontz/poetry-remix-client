import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import DragAndDrop from './DragAndDrop';
import Magnet from './Magnet'

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const linesHTML = this.props.currentPoem.lines.map(line => {
      return <li>{line}</li>
    });
    
    return (
      <div>
        <NavBar />
      <p>{linesHTML}</p>
      <DragAndDrop lines={this.props.currentPoem.lines} hideSourceOnDrag={true}/>
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