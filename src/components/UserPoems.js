import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

class UserPoems extends React.Component {

  render() {
    if (!this.props.currentUser) {
      return (
        <Redirect to="/log-in" />
      );
    }
    if (this.props.userPoems.length !== 0) {
      const poemsHtml = this.props.userPoems.map((poem, index) => {
        return (
          <li key={index}>
          <p>{`Title: ${poem.title}`}</p>
          <Link onClick={() => this.seePoem(poem)} to={`/poems/${poem.id}`} >Check out this poem</Link>
        </li>);
    });
    return (
      <div>
          <h2>Your poems:</h2>
          <ul>{poemsHtml}</ul>
        </div>
    );
  } else if (this.props.loading) {
    return <p>Poems incoming</p>
  } else {
    return (<p>You haven't created any poems yet</p>);
  }
} 
}

const mapStateToProps = state => {
  return {
    userPoems: state.poem.userPoems,
    currentUser: state.auth.currentUser,
    loading: state.poem.loading
  }
}



export default connect(mapStateToProps)(UserPoems);