import React, { Component } from 'react';
import FilterControls from '../FilterControls/FilterControls'
import '../App/App.scss'
import StrainContainer from '../StrainContainer/StrainContainer'

class App extends Component{


  render() {
    return (
      <div className='app'>
        <h1 className='hi'>Out of Towner</h1>
        <FilterControls />
        <StrainContainer />
      </div>
    );
  }
}

export default App;
