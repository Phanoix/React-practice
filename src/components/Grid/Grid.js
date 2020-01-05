import React, { Component } from 'react';
import './Grid.css';
import GridRow from './GridRow';

class Grid extends Component {
  constructor(props){
    super(props);
    this.state = {
      is_active: false,
      grid: props.grid_matrix,
      character_pos: props.character_pos,
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

  nextStep( grid, character_pos ){
    let next_grid = grid;

    let mapping = [];
    mapping['e'] = 100;
    mapping['w'] = 100;
    mapping[1] = 2;
    const p_impassible = this.generatePotentialMap( grid, mapping);

    mapping = [];
    mapping['e'] = 3;
    mapping['x'] = -3;
    mapping[-1] = 1;
    let p_terrain = this.propagatePotentialMap( this.generatePotentialMap( grid, mapping) );

    const p_final = p_impassible.map( (row, i) => row.map( (v, j) => v + p_terrain[i][j] ) );

    // use potential map to calculate next step, mark the previous position with -1
    let next_dir = this.nextStepDirection( 1, 1, character_pos, p_final );  // first 2 parameters are the range of the step to consider
    let next_pos = character_pos.map( (v, i) => v + next_dir[i] );

    next_grid[character_pos[0]][character_pos[1]] = -1;

    // check if this is the exit
    // update grid or signal end
    if (grid[next_pos[0]][next_pos[1]] === 'x')
      return 0;

    next_grid[next_pos[0]][next_pos[1]] = 1;
    this.setState({
      character_pos: next_pos
    });

    return next_grid;
  }

  async gameLoop(){
    let new_grid = this.nextStep( this.state.grid, this.state.character_pos );

    if ( new_grid )
      this.setState({
        grid: new_grid
      });
    else{
      this.setState({is_active: false});

    }
    
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

  nextStepDirection( di, dj, pos, pmap ){

    let min = [0 - di, 0 - dj];

    for ( let i = 0 -di; i <= di; i++ ){
      for ( let j = 0 -dj; j <= dj; j++ ) {
        if ( pmap[ pos[0] + i][ pos[1] + j] < pmap[ pos[0] + min[0]][ pos[1] + min[1]] )
          min = [i, j];
      }
    }
    return min;
  }

}

export default Grid;
