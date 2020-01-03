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
    let mapping = [];
    mapping['e'] = 100;
    mapping['w'] = 100;
    const p_impassible = this.generatePotentialMap( this.state.grid, mapping);

    mapping = [];
    mapping['e'] = 3;
    mapping['x'] = -3;
    let p_terrain = this.propagatePotentialMap( this.generatePotentialMap( this.state.grid, mapping) );

    const p_final = p_impassible.map( (row, i) => row.map( (v, j) => v + p_terrain[i][j] ) );

    return p_final;
  }

  async gameLoop(){
    this.setState({
       grid: this.nextStep()
    });
    
    await setTimeout(() => {
      if (this.state.is_active) this.gameLoop();
    }, 1000);
  }
  
  generatePotentialMap( Grid, mapping ){
     let PMap = Grid.map( arr => Array.isArray(arr) ? arr.map(T => mapping[T] ? mapping[T] : 0) : mapping[arr] );
    return PMap;
  }

  propagatePotentialMap( pGrid ){
     let PMap = pGrid.map( (arr, i, M) => arr.map( (v, j) => v 
     + ( j > 0 ? Math.floor( 0.5 * arr[j-1] ) : 0  ) 
     + ( j+1 < arr.length ? Math.floor( 0.5 * arr[j+1] ) : 0  )
     + ( i > 0 ? Math.floor( 0.5 * M[i-1][j] ) : 0  )
     + ( i+1 < M.length ? Math.floor( 0.5 * M[i+1][j] ) : 0  )
     ) );
    return PMap;
  }

}

export default Grid;
