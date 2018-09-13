import React from 'react';
import {connect} from 'react-redux';
import { savePoemToDB } from '../actions/poem';
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
    console.log(title);
    console.log(magnets);
    const newPoem = {title, magnets};
    this.props.dispatch(savePoemToDB(newPoem))
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
    magnets: state.magnets.magnets
  }
}


export default connect(mapStateToProps)(DragAndDropBar);