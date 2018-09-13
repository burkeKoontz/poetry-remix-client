import React from 'react';
import {connect} from 'react-redux';
import Magnet from './Magnet';
import { fetchPoemByID } from '../actions/poem';

class FinishedPoem extends React.Component {

  componentWillMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      console.log(id);
      this.props.dispatch(fetchPoemByID(id));
    }
  }

  render() {
    if (this.props.poem) {
      const { magnets } = this.props.poem;
      return (
        <div>
          <p>Title: {this.props.poem.title}</p>
          <p>Share this poem with your friends! Just pass them this link: {`http://localhost:3000/poems/${this.props.poem.id}`}</p>
          <div className='Cell'>
            {magnets.map((magnet, index) => {
              const { left, top, title } = magnets[index];
              console.log(left);
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
        </div>
      );
    } else {
      return <p>Loading or not in use - needs fixing</p>
    }
}
}

const mapStateToProps = state => {
  return {
    poem : state.poem.openPoem
  }
}

export default connect(mapStateToProps)(FinishedPoem);