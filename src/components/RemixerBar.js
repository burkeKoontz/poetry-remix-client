import React from 'react';
import {connect} from 'react-redux';
import { savePoemToDB } from '../actions/poem';

class RemixerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''}
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

  render() {
    return (
      <ul>
        <form onSubmit={(e) => this.savePoem(e)}>
          <label htmlFor="title">Set a title</label>
          <input type="text" id="title" onChange={(e) => this.setState({title: e.target.value})}></input>
          <button>Save poem to public</button></form>
      </ul>
    );
  }

}

const mapStateToProps = state => {
  return {
    magnets: state.magnets.magnets
  }
}


export default connect(mapStateToProps)(RemixerBar);