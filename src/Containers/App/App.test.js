import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  it('should match snapshot', () => {
    let wrapper
    expect(wrapper).toMatchSnapshot()
  })
})