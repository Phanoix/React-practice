import React from 'react';
import ReactDOM from 'react-dom';
import GridRow from './GridRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridRow />, div);
  ReactDOM.unmountComponentAtNode(div);
});

