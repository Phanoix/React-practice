import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

it('renders without crashing without items', () => {

  const div = document.createElement('div');
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with menu items', () => {
  const menu_items = ["test", "test2", "test3"];

  const div = document.createElement('div');
  ReactDOM.render(<Menu menu_items={menu_items} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders all menu items', () => {
  const menu_items = ["test", "test2", "test3"];

  const div = document.createElement('div');
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
