import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSativa, addIndica, addHybrid } from '../../Actions'
import './FilterControls.scss'
import Filter from '../Filter/Filter'
import { Link } from 'react-router-dom'

class FilterControls extends Component {

  render() {
    return (
      <div>
       <h1 className='hi'>Out of Towner</h1>
        <div className="button-container">
          <Link to='/sativa'>
            <Filter filter='Sativa'>Sativa</Filter>
          </Link>
          <Link to='/indica'>
            <Filter filter='Indica'>Indica</Filter>
          </Link>
          <Link to='/hybrid'>
            <Filter filter='Hybrid'>Hybrid</Filter>
          </Link>
        </div>
      </div>
    )
  }
}






export default FilterControls;