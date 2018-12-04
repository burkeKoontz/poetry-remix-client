import React from 'react';
import {connect} from 'react-redux';
import DragAndDrop from './DragAndDrop';
import DragAndDropBar from './DragAndDropBar';
import { Redirect } from 'react-router-dom';

class EditBoard extends React.Component {

  render() {
    if (this.props.editingPoem) {
      return (
        <main role="main">
        <div className="bg"></div>
        <p className="spaced mobileMessage">Editing and creating poems is not available on mobile at this time.</p>
          <div className="edit-board">
          <DragAndDropBar />
          <DragAndDrop lines={this.props.editingPoem.lines} magnets={this.props.editingPoem.magnets} hideSourceOnDrag={true}/>
          </div>
        </main>
      );
  } else {
    return <Redirect to="/" />;
  }
  }
}

const mapStateToProps = state => {
  return {
    editingPoem: state.poem.editingPoem
  }
}

export default connect(mapStateToProps)(EditBoard);