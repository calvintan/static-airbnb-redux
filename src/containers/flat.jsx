import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

class Flat extends Component {
  handleClick = () => {
    // Redux action
    this.props.selectFlat(this.props.flat);
  };

  render() {
    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };
    let classes = "flat card";
    if (this.props.flat === this.props.selectedFlat) {
      classes += " selected";
    }

    return (
      <div className={classes} style={style} onClick={this.handleClick}>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
          <p>
            {this.props.flat.price}
            {this.props.flat.priceCurrency}
          </p>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

function mapReduxStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
