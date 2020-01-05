import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu.js';
import Grid from './components/Grid/Grid';

class App extends Component {

  render() {

    const menu_items = ["test", "test2", "test3"];
    const char_pos = [6, 2];
    const test_map_1 = [["w", "w", "w", "w", "x"], ["w", "w", "w", "0", "w"], ["w", "0", "w", "0", "w"], ["w", "0", "w", "0", "e"], ["w", "0", "0", "w", "w"], ["w", "0", "e", "0", "w"], ["w", "0", "1", "w", "w"], ["w", "0", "0", "0", "w"], ["w", "0", "0", "0", "w"], ["w", "w", "e", "w", "x"]];
    //var grid_matrix= [["", "", " "], [" ", "1", " "], [" ", "2", " "], [" ", " ", "a"]];
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Review time!
          </p>
          Menu :
          <Menu menu_items={menu_items}></Menu>

          Grid :
          <Grid grid_matrix={test_map_1} character_pos={char_pos}></Grid>
        </header>
      </div>
    );
  }
}

export default App;
