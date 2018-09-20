import React from 'react';
import {connect} from 'react-redux';
import { savePoemToDB, updatePoem} from '../actions/poem';
import {addMagnet} from '../actions/magnet';

class DragAndDropBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', magnet: ''}
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
      console.log(updatePoemBody);
      this.props.dispatch(updatePoem(updatePoemBody))
    } else {
      const newPoem = {title, magnets, userId: id};
      this.props.dispatch(savePoemToDB(newPoem));
    }
  }

  addMagnet(e) {
    e.preventDefault();
    const randomID = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    this.props.dispatch(addMagnet(randomID, {title: this.state.magnet, top: 0, left: 0}))
  }

  render() {
  
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
  }
}


export default connect(mapStateToProps)(DragAndDropBar);