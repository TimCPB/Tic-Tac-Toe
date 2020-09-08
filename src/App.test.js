import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<App page="http://localhost:3000">App</App>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});