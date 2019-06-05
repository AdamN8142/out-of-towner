import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSativa, addIndica, addHybrid, setFilter, setError, isLoading } from '../../Actions'
import '../Filter/Filter.scss'
import { PropTypes } from 'prop-types';

class Filter extends Component {

  handleClick = async () => {
    this.props.setFilter(this.props.filter)
    const strain = await this.fetchStrain(this.props.filter)
    if(this.props.loading === true) {
      return (<h1>HELP ON THE WAY!</h1>)
    } else {
      switch(this.props.filter) {
        case 'Sativa':
          this.props.addSativa(strain)
          break;
        case 'Indica':
          this.props.addIndica(strain)
          break;
        case 'Hybrid':
          this.props.addHybrid(strain) 
          break;
        default:
          break;
      } 
    }
  }

  fetchStrain = async (strain) => {
    try{
      const url = `http://strainapi.evanbusse.com/AqtPtuS/strains/search/race/${strain}`
      this.props.isLoading(true)
      const response = await fetch(url)
      const results = await response.json()
      this.props.isLoading(false)
      return results
    }
    catch(error) {
      this.props.setError(error.message)
    }
  }

  render(){
    return (
      <div>
        <button className = 'filter-button' onClick={() => this.handleClick()}>{this.props.children}</button>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  strain: state.strain,
  loading: state.loading,
  error: state.error
  })

export const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
  addSativa: (sativa) => dispatch(addSativa(sativa)),
  addIndica: (indica) => dispatch(addIndica(indica)),
  addHybrid: (hybrid) => dispatch(addHybrid(hybrid)),
  setError: (message) => dispatch(setError(message)),
  isLoading: (bool) => dispatch(isLoading(bool))
  
})

Filter.propTypes = {
  addHybrid: PropTypes.func,
  addSativa: PropTypes.func,
  addIndica: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.func,
  loading: PropTypes.bool,
  setError: PropTypes.func,
  setFilter: PropTypes.func,
  strain: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)


