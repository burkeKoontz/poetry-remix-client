import {
	DropTarget,
	DragDropContext,
	ConnectDropTarget,
	DropTargetMonitor,
	XYCoord,
} from 'react-dnd'
import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import './DragAndDrop.css';
import Magnet from './Magnet';
import update from 'immutability-helper';

const magnetTarget = {
  drop: function (props, monitor=DropTargetMonitor, component=DragAndDrop || null) {
      if (!component) {
          return;
      }
      const item = monitor.getItem();
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      component.moveBox(item.id, left, top);
  },
};

function collect(connect, monitor) {
  return {
  connectDropTarget: connect.dropTarget()
  }
}

class DragAndDrop extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
			magnets: {
				a: { top: 20, left: 80, title: 'Drag me around' },
				b: { top: 180, left: 20, title: 'Drag me too' },
			},
		}
  }

  moveBox(id, left, top) {
    console.log('move box is being called');
    console.log(this.state);
    console.log(id);
    console.log(left);
    console.log(top);
    this.setState(
      {magnets: {...this.state.magnets, [id]: {title: this.state.magnets[id].title, left, top}}})
    console.log(this.state);
  }

  componentWillMount() {
    this.createMagnets(this.props.lines);
  }

  createMagnets(lines) {
    const firstline = lines["0"];
    const arrayOfWords = firstline.split(' ');
    let location = 20;
    for (let i = 0; i < arrayOfWords.length; i++) {
      location += 20;
      this.createMagnet(i, arrayOfWords[i], 20, location);
    }
  }
  
  createMagnet(id, content, top, left) {
    console.log(id, content, top, left);
    const magnet = {top, left, title: content}
    this.setState({
      magnets: {
        ...this.state.magnets, [id]: magnet
      }
    });
  }
  
  render() {
    const { hideSourceOnDrag, connectDropTarget } = this.props;
    const { magnets } = this.state;

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
export default DropTarget('magnet', magnetTarget, collect)(DragAndDrop)