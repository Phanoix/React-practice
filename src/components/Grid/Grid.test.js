import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';

it('renders without crashing without items', () => {

  const div = document.createElement('div');
  ReactDOM.render(<Grid />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with grid items', () => {
  const grid_squares = ["test", "test2", "test3"];

  const div = document.createElement('div');
  ReactDOM.render(<Grid grid_squares={grid_squares} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders all grid items', () => {
  const grid_squares = ["test", "test2", "test3"];

  const div = document.createElement('div');
  ReactDOM.render(<Grid />, div);
  ReactDOM.unmountComponentAtNode(div);
});
