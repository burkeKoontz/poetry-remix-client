import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import UserPoem from './UserPoem';
import { deletePoemByID, fetchUserPoemsFromDB, deletePoemFromState, clearSuccess} from '../actions/poem';

class UserPoems extends React.Component {

  componentWillMount() {
    if (this.props.currentUser) {
      this.fetchPoems();
      }
      this.props.dispatch(clearSuccess());
    }

  fetchPoems() {
    this.props.dispatch(fetchUserPoemsFromDB(this.props.currentUser.id));
  }

  deletePoem(id) {
    this.props.dispatch(deletePoemByID(id));
    this.props.dispatch(deletePoemFromState(id));
  }

  render() {

    if (!this.props.currentUser) {
      return (
        <Redirect to="/log-in" />
      );
    }
    if (this.props.userPoems.length !== 0) {
      const poemsHtml = this.props.userPoems.map((poem, index) => {
        return (
          <li key={index}><UserPoem deletePoem={(id) => this.deletePoem(id)} title={poem.title} author={poem.author} poem={poem} /></li>);
    });
    return (
        <main aria-live="assertive" role="main">
          <h2 className="spaced">Your poems:</h2>
          <ul>{poemsHtml}</ul>
        </main>
    );
  } else if (this.props.loading) {
    return <main aria-live="polite" role="main"><p className="spaced">Poems incoming</p></main>;
  } else {
    return (<main aria-live="polite" role="main"><p className="spaced">You haven't created any poems yet</p></main>);
  }
} 
}

const mapStateToProps = state => {
  return {
    userPoems: state.poem.userPoems,
    currentUser: state.auth.currentUser,
    loading: state.poem.loading,
  }
}

export default connect(mapStateToProps)(UserPoems);