import React, { Component } from 'react';
import './Grid.css';
import GridRow from './GridRow';
import { isNumber } from 'util';

class Grid extends Component {
  constructor(props){
    super(props);
    this.state = {
      grid: props.grid_matrix
    }
  }

  gridRows(grid_matrix) {
    let list = [''];
    if (grid_matrix){
      list = grid_matrix.map((grid_row_matix, grid_row_index) => 
        <GridRow grid_row_matrix={grid_row_matix} key={grid_row_index}></GridRow>
      )
    }

    return list;
  }

  render() {
    const grid_matrix = this.state.grid;
    return (
      <div className="Grid">
        {this.gridRows(grid_matrix)}
        <button onClick={() => this.updateGrid()}>
        do stuff
        </button>
      </div>
    );
  }

  updateGrid() {
    
    this.state.grid.forEach(row => {
      row.forEach(element => {
        if (isNumber(element)){
          element++;
        }
      });
    });

    this.render();
  }
}

export default Grid;
