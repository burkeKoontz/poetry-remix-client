import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import Magnet from './Magnet';

class FinishedPoem extends React.Component {

  render() {
    console.log(this.props.poem);
    const { magnets } = this.props.poem;
    return (
      <div>
        <p>Title:</p>
        <div className='Cell'>
          {Object.keys(magnets).map(key => {
            const { left, top, title } = magnets[key]
            return (
              <Magnet
                key={key}
                id={key}
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
  }
}


export default connect()(FinishedPoem);