import {
	DropTarget,
	DropTargetMonitor,
} from 'react-dnd';
// XYCoord,	DragDropContext,
// ConnectDropTarget,
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
    this.createMagnets(this.props.lines);
  }

  // the next line of magnets should have their top location changed
  // have one big array of words

  createMagnets(lines) {
    const keyArray = Object.keys(lines);
    const arrayofWords = []
    let xLocation = 20; // changes based on width of previous magnet???
    let yLocation = 20; // changes when line number changes
    for (let i = 0; i < keyArray.length; i++) {
      const content = lines[i].split(' ');
      for (let j = 0; j < content.length; j++){
        xLocation = (80 * (j+1));
        yLocation = (60 * (i+1));
        const magnetObj = {lineNumber: i, content: content[j], xLocation, yLocation}
        arrayofWords.push(magnetObj);
      }
    }
    arrayofWords.map((word, index) => this.createMagnet(index, word.content, word.yLocation, word.xLocation));
  }
  
  createMagnet(id, content, top, left) {
    const magnet = {top, left, title: content}
    this.props.dispatch(addMagnet(id, magnet))
  }
  
  render() {
    const { hideSourceOnDrag, connectDropTarget, magnets } = this.props;

    return (
    connectDropTarget(
      <div className='Cell'>
        {Object.keys(magnets).map(key => {
          const { left, top, title } = magnets[key]
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
    magnets: state.magnets.magnets
  }
}

export default DropTarget('magnet', magnetTarget, collect)(connect(mapStateToProps, null, null, {withRef: true})(DragAndDrop))