import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu.js';

class App extends Component {
  render() {

    const menu_items = ["test", "test2", "test3"];
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Review time!
          </p>
          Menu :
          <Menu menu_items={menu_items}></Menu>
        </header>
      </div>
    );
  }
}

export default App;
