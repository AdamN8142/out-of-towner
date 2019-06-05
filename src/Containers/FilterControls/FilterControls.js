import React, { Component } from 'react';
import './FilterControls.scss'
import Filter from '../Filter/Filter'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';


class FilterControls extends Component {

  render() {
    return (
      <div className='app'>
       <h1 className='header'>Out of Towner</h1>
       <h3 className='sub-header'>Choose your adventure...</h3>
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


FilterControls.propTypes = {
  history: PropTypes.object, 
  location: PropTypes.object,
  match: PropTypes.object
}


export default FilterControls;