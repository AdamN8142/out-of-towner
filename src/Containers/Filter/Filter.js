import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSativa, addIndica, addHybrid, setFilter } from '../../Actions'
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
    const url = `http://strainapi.evanbusse.com/AqtPtuS/strains/search/race/${strain}`
    const response = await fetch(url)
    const results = await response.json()
    return results
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
  strain: state.strain
  })

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
  addSativa: (sativa) => dispatch(addSativa(sativa)),
  addIndica: (indica) => dispatch(addIndica(indica)),
  addHybrid: (hybrid) => dispatch(addHybrid(hybrid))
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)


