import React from 'react';
import {connect} from 'react-redux';
import Magnet from './Magnet';
import { fetchPoemByID } from '../actions/poem';
import {CLIENT_BASE_URL} from '../config';
import './FinishedPoem.css'

class FinishedPoem extends React.Component {

  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(fetchPoemByID(id));
  }

  render() {
    let share;
  
    if (this.props.poem) {
      if (this.props.currentUser && this.props.currentUser.id === this.props.poem.userId) {
         share =  <p className="centered spaced overflow">Share this poem with your friends! Just pass them this link: {`${CLIENT_BASE_URL}/poems/${this.props.poem.id}`}</p>
      }
      const { magnets } = this.props.poem;
      let height;
      if (Object.keys(magnets).length) {
        let keyArray = Object.keys(magnets);
        height = keyArray.reduce((acc, key) => {
          return magnets[key].top > 300 ? magnets[key].top + 300 : acc;
        }, 300)
      }
      return (
        <main aria-live="assertive" role="main">
          <p className="centered">Title: {this.props.poem.title}</p>
          {share}
          <div style={{height}} className='Cell'>
            {magnets.map((magnet, index) => {
              const { left, top, title } = magnets[index];
              return (
                <Magnet
                  key={magnet._id}
                  id={magnet._id}
                  left={left}
                  top={top}
                >
                  {title}
                </Magnet>
              );
            })}
          </div>
        </main>
      );
    } else {
      return <main aria-live="polite" role="main"><p className="spaced">Loading</p></main>
    }
}
}

const mapStateToProps = state => {
  return {
    poem : state.poem.openPoem,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(FinishedPoem);