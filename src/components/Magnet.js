import { DragSource, ConnectDragSource } from 'react-dnd'
import React from 'react';
import './Magnet.css'

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

  render() {
		const {
			hideSourceOnDrag,
			left,
			top,
			connectDragSource,
			isDragging,
			children,
		} = this.props
		if (isDragging && hideSourceOnDrag) {
			return null
		}

		return (
			connectDragSource &&
			connectDragSource(<div className="magnet" style={{left, top}}>{children}</div>)
		)
	}
}


export default DragSource('magnet', magnetSource, collect)(Magnet);