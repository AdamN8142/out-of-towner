import React, { Component } from 'react';
import FilterControls from '../FilterControls/FilterControls'
import '../App/App.scss'

class App extends Component{

  componentDidMount() {
    this.fetchStrain('INDICA')
  }


  fetchStrain =  async (strain) => {
    const url = `http://strainapi.evanbusse.com/AqtPtuS/strains/search/race/${strain}`
    const response = await fetch(url)
    const results = await response.json()
    this.setState({
      [strain]:results
    })
  }


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
