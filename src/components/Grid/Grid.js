import React, { Component } from 'react';
import './Grid.css';
import GridRow from './GridRow';

class Grid extends Component {
  constructor(props){
    super(props);
    this.state = {
      is_active: false,
      grid: props.grid_matrix,
      num_rows: props.grid_matrix.length,
      num_cols: props.grid_matrix[0].length
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
    return (
      <div className="Grid">
        {this.gridRows(this.state.grid)}
        <button onClick={() => { this.setState({is_active: !this.state.is_active} ); if (!this.state.is_active) this.gameLoop(); } }>
        do stuff
        </button>
      </div>
    );
  }

  updateGrid( newGrid ) {
    this.setState(
      {
        grid: newGrid
      }
    )
  }


  nextStep(){
    return [[Math.floor(Math.random() * 10), "", " "], [" ", "1", " "], [" ", "2", " "], [" ", " ", "a"]]
  }

  async gameLoop(){
    await setTimeout(() => {
      this.updateGrid(this.nextStep());
      if (this.state.is_active) this.gameLoop();
    }, 1000);
  }
}

export default Grid;
