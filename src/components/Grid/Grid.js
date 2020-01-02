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

  nextStep(){
    let Mapping = [];
    Mapping[1] = -1;
    Mapping[2] = -2;
    Mapping['q'] = 4;

    return this.generatePotentialMap([[Math.floor(Math.random() * 10), "", " "], [" ", "1", " "], [" ", "2", " "], [" ", " ", "a"], ["q", "w", "E"]], Mapping);
  }

  async gameLoop(){
    this.setState({
       grid: this.nextStep()
    });
    
    await setTimeout(() => {
      if (this.state.is_active) this.gameLoop();
    }, 1000);
  }
  
  generatePotentialMap( Grid, Mapping ){
     let PMap = Grid.map( arr => Array.isArray(arr) ? arr.map(T => Mapping[T] ? Mapping[T] : 0) : Mapping[arr] );
    return PMap;
  }

}

export default Grid;
