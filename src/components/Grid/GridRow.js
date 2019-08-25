import React, { Component } from 'react';
import GridSquare from './GridSquare';
import './GridRow.css';

class GridRow extends Component {

  gridSquares(grid_row_matrix) {
    let list = [''];
    if (grid_row_matrix){
      list = grid_row_matrix.map((grid_element) => 
        <GridSquare text={grid_element.toString()}></GridSquare>
      )
    }

    return list;
  }

  render() {
    const grid_row_matrix = this.props.grid_row_matrix;
    return (
      <div className="GridRow">
        {this.gridSquares(grid_row_matrix)}
      </div>
    );
  }
}

export default GridRow;
