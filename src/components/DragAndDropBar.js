import React from 'react';
import {connect} from 'react-redux';
import { savePoemToDB, updatePoem, clearCurrentPoem, closePoem, clearSuccess} from '../actions/poem';
import {clearSearching} from '../actions/search';
import {addMagnet, clearMagnets} from '../actions/magnet';
import { Redirect } from 'react-router-dom';

class DragAndDropBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', magnet: ''}
  }

  goHome() {
    this.props.dispatch(clearSearching());
    // this.props.dispatch(clearCurrentPoem());
    this.props.dispatch(clearMagnets());
  }

  savePoem(e) {
    e.preventDefault();
    const title = this.state.title;
    const magnets = this.props.magnets;
    let id;
    if (this.props.currentUser) {
      id = this.props.currentUser.id ;
    }
    if (this.props.editingPoem.id) {
      const updatePoemBody = {title, magnets, userId: id, id: this.props.editingPoem.id};
      this.props.dispatch(updatePoem(updatePoemBody));
      this.goHome();
    } else {
      const newPoem = {title, magnets, userId: id};
      this.props.dispatch(savePoemToDB(newPoem));
      this.goHome();
    }
  }

  addMagnet(e) {
    e.preventDefault();
    const randomID = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    this.props.dispatch(addMagnet(randomID, {title: this.state.magnet, top: 0, left: 0}))
  }

  render() {
    if (this.props.saveSuccess && !this.props.currentUser) {
      this.props.dispatch(clearSuccess());
      return <Redirect to="/" />
    }

    if (this.props.updateSuccess || this.props.saveSuccess) {
      this.props.dispatch(clearSuccess());
      return <Redirect to="/your-poems" />
    }
  
    return (
      <div className="centered">
        <form name="save-poem-form" className="spaced" onSubmit={(e) => this.savePoem(e)}>
          <label className="spaced" htmlFor="title">Save Poem</label>
          <input  className="spaced" type="text" id="title" onChange={(e) => this.setState({...this.state, title: e.target.value})}></input>
          <button className="button spaced">Save poem</button>
        </form>
        <form name="add-magnet-form" className="spaced" onSubmit={(e) => this.addMagnet(e)}>
          <label className="spaced" htmlFor="magnet">Add a magnet</label>
          <input  className="spaced" type="text" id="magnet" onChange={(e) => this.setState({...this.state, magnet: e.target.value})}></input>
          <button className="button spaced">Add magnet to board</button>
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    error: state.poem.error,
    magnets: state.magnets.magnets,
    editingPoem: state.poem.editingPoem,
    currentUser: state.auth.currentUser,
    updateSuccess: state.poem.updateSuccess,
    saveSuccess: state.poem.saveSuccess
  }
}


export default connect(mapStateToProps)(DragAndDropBar);