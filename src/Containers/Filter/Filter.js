import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSativa, addIndica, addHybrid, setFilter } from '../../Actions'


class Filter extends Component {

  handleClick = async () => {
    this.props.setFilter(this.props.filter)
    const strain = await this.fetchStrain(this.props.filter)
    switch(this.props.filter) {
      case 'Sativa':
        this.props.addSativa(strain)
      case 'Indica':
        this.props.addIndica(strain)
      case 'Hybrid':
        this.props.addHybrid(strain) 
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
      <button
        onClick={() => this.handleClick()}
        >
        {this.props.children}
      </button>

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