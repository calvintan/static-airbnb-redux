import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

class Map extends Component {
  render() {
    const style = {
      width: "20px",
      height: "20px",
      backgroundColor: "red",
      borderRadius: "50%"
    };

    let marker = null;
    let center = {
      lat: 48.8566,
      lng: 2.3522
    };

    if (this.props.selectedFlat) {
      marker = (
        <div
          style={style}
          lat={this.props.selectedFlat.lat}
          lng={this.props.selectedFlat.lng}
        />);
      center = {
        lat: this.props.selectedFlat.lat,
        lng: this.props.selectedFlat.lng
      };
    }

    return (
      <div className="col-sm-5 map-container">
        <GoogleMapReact center={center} defaultZoom={11}>
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedFlat: state.selectedFlat };
}

export default connect(mapStateToProps)(Map);
