import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from '../components/flat';

class FlatList extends Component {
  componentWillMount() {
    // dispatch an action to update the redux state tree (flats)
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => {
          return <Flat flat={flat} key={flat.name} />
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapReduxStateToProps(state) {
  return {
    flats: state.flats
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
