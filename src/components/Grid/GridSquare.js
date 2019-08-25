import React, { Component } from 'react';
import './GridSquare.css';

class GridSquare extends Component {
  render() {
    return (
      <div className="GridSquare">
        {this.props.text}
      </div>
    );
  }
}

export default GridSquare;
