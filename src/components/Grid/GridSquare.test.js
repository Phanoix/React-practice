import React from 'react';
import ReactDOM from 'react-dom';
import GridSquare from './GridSquare';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridSquare />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays the grid square item text', () => {
  const text = "test123";
  const div = document.createElement('div');
  ReactDOM.render(<GridSquare text={text} />, div);
  expect(div.querySelector('div').textContent).toBe(text);
  ReactDOM.unmountComponentAtNode(div);
});
