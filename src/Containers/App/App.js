import React, { Component } from 'react';
import FilterControls from '../FilterControls/FilterControls'
import '../App/App.scss'

class App extends Component{


  render() {
    return (
      <div>
        <h1 className='hi'>hello</h1>
        <FilterControls />
      </div>
    );
  }
}

export default App;
