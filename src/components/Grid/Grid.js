import React, { Component } from 'react';
import './Grid.css';
import GridRow from './GridRow';

class Grid extends Component {
  gridRows(grid_matrix) {
    let list = [''];
    if (grid_matrix){
      list = grid_matrix.map((grid_row_matix) => 
        <GridRow text={grid_row_matix.toString()} key={grid_row_matix.toString()}></GridRow>
      )
    }

    return list;
  }

  render() {
    const grid_matrix = this.props.grid_matrix;
    return (
      <div className="Grid">
        {this.gridRows(grid_matrix)}
      </div>
    );
  }
}

export default Grid;
