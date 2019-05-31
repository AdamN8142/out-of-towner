import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSativa, addIndica, addHybrid } from '../../Actions'

class FilterControls extends Component {

  constructor(){
    super();
    this.state = {
      selectedFilter: ''
    }
  }


  // fetchStrain =  async (strain) => {
  //   const url = `http://strainapi.evanbusse.com/AqtPtuS/strains/search/race/${strain}`
  //   const response = await fetch(url)
  //   const results = await response.json()
  //   console.log(results)
  //     if(this.state.selectedFilter === 'sativa'){
  //       await this.props.addSativa(results)
  //     } else if (this.state.selectedFilter === 'hybrid'){
  //       await this.props.addHybrid(results)
  //     } else if (this.props.selectedFilter === 'indica') {
  //       await this.props.addIndica(results)
  //     }
  // }

  fetchSativa=  async () => {
    const url = 'http://strainapi.evanbusse.com/AqtPtuS/strains/search/race/sativa'
    const response = await fetch(url)
    const results = await response.json()
    console.log(results)
      this.props.addSativa(results)
  }

  fetchIndica=  async () => {
    const url = 'http://strainapi.evanbusse.com/AqtPtuS/strains/search/race/indica'
    const response = await fetch(url)
    const results = await response.json()
    console.log(results)
      this.props.addIndica(results)
  }

  fetchHybrid=  async () => {
    const url = 'http://strainapi.evanbusse.com/AqtPtuS/strains/search/race/hybrid'
    const response = await fetch(url)
    const results = await response.json()
    console.log(results)
      this.props.addHybrid(results)
  }


  setFilter = (event) => {
    event.preventDefault();
    this.setState({
      selectedFilter: event.target.value
    })
  }


  render() {
    return (
      <div>
        <button
          value="sativa"
          onClick={this.fetchSativa}>SATIVA
        </button>
        <button
          value="hybrid"
          onClick={this.fetchtHybrid}>HYBRID
        </button>
        <button
          value="indica"
          onClick={this.fetchIndica}>INDICA
        </button>
        <button
        onClick={this.fetchIndica}
        
        >CLICK ME </button>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
strain: state.strain
})

const mapDispatchToProps = (dispatch) => ({
  addSativa: (sativa) => dispatch(addSativa(sativa)),
  addIndica: (indica) => dispatch(addIndica(indica)),
  addHybrid: (hybrid) => dispatch(addHybrid(hybrid))

})

export default connect(mapStateToProps, mapDispatchToProps)(FilterControls);