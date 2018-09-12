import { DragSource} from 'react-dnd'
import {connect} from 'react-redux';
// , ConnectDragSource 
import React from 'react';
import './Magnet.css';
import {deleteMagnet} from '../actions/magnet';

function collect(connect, monitor) {
  return {
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
  }
}

const magnetSource = {
	beginDrag(props) {
		const { id, left, top } = props
		return { id, left, top }
	},
}

class Magnet extends React.Component{

	deleteMagnet() {
		const idToDelete = this.props.id;
		this.props.dispatch(deleteMagnet(idToDelete));
	}

  render() {
		const {
			hideSourceOnDrag,
			left,
			top,
			connectDragSource,
			isDragging,
			children
		} = this.props
		if (isDragging && hideSourceOnDrag) {
			return null
		}

		return (
			connectDragSource &&
			connectDragSource(<div className="magnet" style={{left, top}}>{children}<button className="delete" onClick={()=> this.deleteMagnet()}>X</button></div>)
		)
	}
}


export default DragSource('magnet', magnetSource, collect)((connect()(Magnet)));

