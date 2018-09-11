import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import DragAndDrop from './DragAndDrop';
import RemixerBar from './RemixerBar';

class Board extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <RemixerBar />
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