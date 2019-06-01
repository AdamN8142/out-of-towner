import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSativa, addIndica, addHybrid } from '../../Actions'
import './FilterControls.scss'
import Filter from '../Filter/Filter'

class FilterControls extends Component {

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