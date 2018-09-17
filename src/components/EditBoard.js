import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import DragAndDrop from './DragAndDrop';
import DragAndDropBar from './DragAndDropBar';

class EditBoard extends React.Component {

  render() {
    return (
      <div>
        <DragAndDropBar />
        <DragAndDrop lines={this.props.editingPoem.lines} magnets={this.props.editingPoem.magnets} hideSourceOnDrag={true}/>
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