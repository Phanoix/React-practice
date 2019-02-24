import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays the menu item text', () => {
  const text = "test123";
  const div = document.createElement('div');
  ReactDOM.render(<MenuItem text={text} />, div);
  expect(div.querySelector('div').textContent).toBe(text);
  ReactDOM.unmountComponentAtNode(div);
});
