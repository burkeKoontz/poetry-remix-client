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
      let windowWidth = window.innerWidth;
      let mobileTop = 40;
      let warningMessage = false;
      let repetition = 0;
      let mobileMessage;
      
      if (windowWidth < 360) {
        warningMessage = true;
        repetition = 1;
      } else if (windowWidth < 430 && windowWidth > 360) {
        warningMessage = true;
        repetition = 2;
      } else if (windowWidth < 770 && windowWidth > 430) {
        warningMessage = true;
        repetition = 3;
      }

      if (warningMessage) {
        mobileMessage = <p className="centered">This user's poem has been temporarily changed for mobile viewing. If you'd like to see their poem in full, please switch to desktop.</p>
      }

      let magnetsToPlace = magnets.map((magnet, index) => {
        let { left, top, title } = magnets[index];
        if (windowWidth < 770 && windowWidth > 430) {
          if (repetition === 3) {
            left = 30;
            top = mobileTop;
            repetition--;
            height = mobileTop;
          } else if (repetition === 2) {
            left = 130;
            top = mobileTop;
            repetition--;
            height = mobileTop;
          } else if (repetition === 1) {
            left = 230;
            top = mobileTop;
            repetition--;
            height = mobileTop;
          } else {
            left = 330;
            top = mobileTop;
            repetition = 3;
            mobileTop += 50;
            height = mobileTop;
          }
        } else if (windowWidth < 430 && windowWidth > 360) {
           if (repetition === 2) {
            left = 30;
            top = mobileTop;
            repetition--;
            height = mobileTop;
          } else if (repetition === 1) {
            left = 130;
            top = mobileTop;
            repetition--;
            height = mobileTop;
          } else {
            left = 230;
            top = mobileTop;
            repetition = 2;
            mobileTop += 50;
            height = mobileTop;
          }
        } else if (windowWidth < 360) {
          if (repetition === 1) {
            left = 30;
            top = mobileTop;
            repetition--;
            height = mobileTop;
          }  else {
            repetition = 1;
            left = 130;
            top = mobileTop;
            mobileTop += 50;
            height = mobileTop;
          }
        }

        height+=100;

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
      });

      return (
        <main aria-live="assertive" role="main">
        <div className="bg"></div>
          <p className="centered">Title: {this.props.poem.title}</p>
          {mobileMessage}
          {share}
          <div style={{height}} className='Cell'>
            {magnetsToPlace}
          </div>
        </main>
      );
    } else {
      return <main aria-live="polite" role="main"><div className="bg"></div><p className="spaced">Loading</p></main>
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