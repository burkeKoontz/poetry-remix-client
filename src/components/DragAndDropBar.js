import React from 'react';
import {connect} from 'react-redux';
import { savePoemToDB, clearCurrentPoem } from '../actions/poem';
import {addMagnet} from '../actions/magnet';
import { clearSearching } from '../actions/search';

class DragAndDropBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', magnet: ''}
  }

  savePoem(e) {
    e.preventDefault();
    const title = this.state.title;
    const magnets = this.props.magnets;
    const id = this.props.currentUser.id || null;
    const newPoem = {title, magnets, userId: id};
    this.props.dispatch(savePoemToDB(newPoem));
    this.props.dispatch(clearCurrentPoem());
    this.props.dispatch(clearSearching());
  }

  addMagnet(e) {
    e.preventDefault();
    const randomID = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    this.props.dispatch(addMagnet(randomID, {title: this.state.magnet, top: 0, left: 0}))
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.savePoem(e)}>
          <label htmlFor="title">Set a title</label>
          <input type="text" id="title" onChange={(e) => this.setState({...this.state, title: e.target.value})}></input>
          <button>Save poem to public</button>
        </form>
        <form onSubmit={(e) => this.addMagnet(e)}>
          <label htmlFor="title">Add a magnet</label>
          <input type="text" id="title" onChange={(e) => this.setState({...this.state, magnet: e.target.value})}></input>
          <button>Add magnet to board</button>
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    magnets: state.magnets.magnets,
    editingPoem: state.poem.editingPoem,
    currentUser: state.auth.currentUser
  }
}


export default connect(mapStateToProps)(DragAndDropBar);