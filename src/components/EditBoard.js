import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import NavBar from './NavBar';
import DragAndDrop from './DragAndDrop';
import DragAndDropBar from './DragAndDropBar';

class EditBoard extends React.Component {

  render() {
    if (!this.props.editingPoem) {
      return <Redirect to='/' />;
    }
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