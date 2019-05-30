import React, { Component } from 'react';

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
        Hello
      </div>
    );
  }
}

export default App;
