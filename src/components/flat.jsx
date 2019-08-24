import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className="flat card" style={style}>
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

export default Flat;
