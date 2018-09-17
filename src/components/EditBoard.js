import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import DragAndDrop from './DragAndDrop';
import DragAndDropBar from './DragAndDropBar';

class EditBoard extends React.Component {

  render() {
    let errorMessage;
    if (this.props.error) {
        errorMessage = (
            <div className="message message-error">{this.props.error}</div>
        );
    }

    if (!this.props.editingPoem) {
      return <Redirect to='/' />;
    }

    return (
      <div>
        {errorMessage}
        <DragAndDropBar />
        <DragAndDrop lines={this.props.editingPoem.lines} magnets={this.props.editingPoem.magnets} hideSourceOnDrag={true}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editingPoem: state.poem.editingPoem,
    error: state.poem.error
  }
}

export default connect(mapStateToProps)(EditBoard);