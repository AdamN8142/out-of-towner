import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSativa, addIndica, addHybrid, setFilter, setError, isLoading } from '../../Actions'
import StrainContainer from '../StrainContainer/StrainContainer'
import { Route, Switch, withRouter } from 'react-router-dom'
import '../Filter/Filter.scss'


class Filter extends Component {

  handleClick = async () => {
    this.props.setFilter(this.props.filter)
    const strain = await this.fetchStrain(this.props.filter)
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

  fetchStrain = async (strain) => {
    try{
      const url = `http://strainapi.evanbusse.com/AqtPtuS/strains/search/race/${strain}`
      const response = await fetch(url)
      const results = await response.json()
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

const mapStateToProps = (state) => ({
  strain: state.strain,
  loading: state.loading,
  error: state.error
  })

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
  addSativa: (sativa) => dispatch(addSativa(sativa)),
  addIndica: (indica) => dispatch(addIndica(indica)),
  addHybrid: (hybrid) => dispatch(addHybrid(hybrid)),
  setError: (message) => dispatch(setError(message)),
  isLoading: (bool) => dispatch(isLoading(bool))
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)


