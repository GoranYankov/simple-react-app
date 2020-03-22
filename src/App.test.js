import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { sum } from './utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should return 6', () => {
  const result = sum(3, 3);
  expect(result).toEqual(6);
});

it('should return 4', () => {
  const result = sum(2, 3);
  expect(result).not.toEqual(1);
});
