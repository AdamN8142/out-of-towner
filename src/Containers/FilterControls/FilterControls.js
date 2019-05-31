import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSativa, addIndica, addHybrid } from '../../Actions'
import './FilterControls.scss'
import Filter from '../Filter/Filter'

class FilterControls extends Component {


  // fetchStrain = async (strain, action) => {
  //   const url = `http://strainapi.evanbusse.com/AqtPtuS/strains/search/race/${strain}`
  //   const response = await fetch(url)
  //   const results = await response.json()
  //     action(results)
  // }



  render() {
    return (
      <div className="button-container">
        <Filter filter='Sativa'>Sativa</Filter>
        <Filter filter='Indica'>Indica</Filter>
        <Filter filter='Hybrid'>Hybrid</Filter>
      </div>
    )
  }
}






export default FilterControls;