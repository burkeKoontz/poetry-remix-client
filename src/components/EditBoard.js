import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import DragAndDrop from './DragAndDrop';
import DragAndDropBar from './DragAndDropBar';

class EditBoard extends React.Component {

  render() {
    return (
      <div>
        <DragAndDropBar />
        <DragAndDrop lines={this.props.editingPoem.lines} hideSourceOnDrag={true}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editingPoem: state.poem.editingPoem
  }
}

export default connect(mapStateToProps)(EditBoard);