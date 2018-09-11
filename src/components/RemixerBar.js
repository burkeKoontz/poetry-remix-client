import React from 'react';
import {connect} from 'react-redux';

class RemixerBar extends React.Component {


  render() {
    return (
      <ul>
        <li><button>Save poem to public</button></li>
      </ul>
    );
  }

}


export default connect()(RemixerBar);