import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import Magnet from './Magnet';

class FinishedPoem extends React.Component {

  render() {
    console.log(this.props.poem);
    const { magnets } = this.props.poem;
    console.log(magnets);
    return (
      <div>
        <p>Title:</p>
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
  }
}


export default connect()(FinishedPoem);