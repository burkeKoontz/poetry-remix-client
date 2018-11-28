import {
	DropTarget,
	DropTargetMonitor,
} from 'react-dnd';
import React from 'react';
import {connect} from 'react-redux';
import './DragAndDrop.css';
import Magnet from './Magnet';
import {addMagnet, changeMagnetLocation} from '../actions/magnet';

const magnetTarget = {
  drop: function (props, monitor=DropTargetMonitor, component=DragAndDrop || null) {
      if (!component) {
          return;
      }
      const item = monitor.getItem();
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      component.getWrappedInstance().moveMagnet(item.id, left, top);
  },
};

function collect(connect, monitor) {
  return {
  connectDropTarget: connect.dropTarget()
  }
}

class DragAndDrop extends React.Component {

  moveMagnet(id, left, top) {
    const newMagnet = {title: this.props.magnets[id].title, left, top};
    this.props.dispatch(changeMagnetLocation(id, newMagnet));
  }

  componentWillMount() {
    if (this.props.lines) {
      this.createMagnets(this.props.lines);
    } else {
      this.props.editingPoem.magnets.forEach(magnet => {
        this.props.dispatch(addMagnet(magnet._id, magnet))
      });
    }
  }

  createMagnets(lines) {
    const keyArray = Object.keys(lines);
    const arrayofWords = [];
    let xLocation; // changes based on width of previous magnet
    let yLocation; // changes when line number of poem changes
    let lastWordLength;
    let lastXLocation;
    let xDifference;
    let xLocations = [];
    const windowWidth = window.screen.availWidth;

    keyArray.forEach((line, i) => {
      const content = lines[i].split(' ');
      xLocations = [];
      content.forEach((word, j) => {
        lastWordLength = j > 0 ? content[j-1].length : content[j].length;
        lastXLocation = j > 0 ? xLocations[j-1] : 25;
        // xDifference varies based on the word length of the last word
        xDifference = windowWidth < 600 ?  2 * (lastWordLength) : 8 * (lastWordLength);
        xLocation = j === 0 ? 25 : (lastXLocation + xDifference + 50);
        xLocations.push(xLocation);
        yLocation = (60 * (i+1));
        const magnetObj = {lineNumber: i, content: content[j], xLocation, yLocation}
        if (content[j] !== '') {
          arrayofWords.push(magnetObj);
         }
      })
    })

    arrayofWords.map((word, index) => this.createMagnet(index, word.content, word.yLocation, word.xLocation));
  }
  
  createMagnet(id, content, top, left) {
    const magnet = {top, left, title: content};
    this.props.dispatch(addMagnet(id, magnet))
  }
  
  render() {
    let height;
    const { hideSourceOnDrag, connectDropTarget, magnets } = this.props;
    if (Object.keys(magnets).length) {
      let keyArray = Object.keys(magnets);
      height = keyArray.reduce((acc, key) => {
        return magnets[key].top > 300 ? magnets[key].top + 300 : acc;
      }, 300)
    }
    return (
    connectDropTarget(
      <div style={{height}} className='Cell'>
        {Object.keys(magnets).map(key => {
          const { left, top, title } = magnets[key];
          return (
            <Magnet
              key={key}
              id={key}
              left={left}
              top={top} 
              hideSourceOnDrag={hideSourceOnDrag}
            >
            {title}
            </Magnet>
          );
        })}
      </div>,
    )
  );
  }
}

const mapStateToProps = state => {
  return {
    magnets: state.magnets.magnets,
    editingPoem: state.poem.editingPoem,
    addingMoreMagnets : state.magnets.addingMoreMagnets
  }
}

export default DropTarget('magnet', magnetTarget, collect)(connect(mapStateToProps, null, null, {withRef: true})(DragAndDrop))