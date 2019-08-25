import React, { Component } from 'react';
import GridSquare from './GridSquare';
import './GridRow.css';

class GridRow extends Component {
  render() {
    const text = this.props.text;
    return (
      <div className="GridRow">
        <GridSquare>{this.props.text}</GridSquare>
      </div>
    );
  }
}

export default GridRow;
