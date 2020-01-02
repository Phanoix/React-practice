import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu.js';
import Grid from './components/Grid/Grid';

class App extends Component {

  render() {

    const menu_items = ["test", "test2", "test3"];
    var grid_matrix= [["", "", " "], [" ", "1", " "], [" ", "2", " "], [" ", " ", "a"]];
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Review time!
          </p>
          Menu :
          <Menu menu_items={menu_items}></Menu>

          Grid :
          <Grid grid_matrix={grid_matrix}></Grid>
        </header>
      </div>
    );
  }
}

export default App;
