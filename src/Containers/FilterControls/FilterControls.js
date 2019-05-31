import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSativa } from '../../Actions'

class FilterControls extends Component {

  constructor(){
    super();
    this.state = {
      selectedFilter : ''
    }
  }


  fetchStrain =  async (strain) => {
    const url = `http://strainapi.evanbusse.com/AqtPtuS/strains/search/race/${strain}`
    const response = await fetch(url)
    const results = await response.json()
      if(this.state.selectedFilter === 'Sativa'){
        await this.props.addSativa(results)
      } else if (this.state.selectedFilter === 'Hybrid'){
        await this.props.addHybrid(results)
      } else if (this.props.selectedFilter === 'Indica') {
        await this.props.addIndica(results)
      }
  }

  setFilter = (event) => {
    this.setState({
      selectedFilter: event.target.value
    }, this.fetchStrain(this.state.selectedFilter))
  }

  //SHOULD I BE BREAKING EACH FETCH OUT INDIVIDUALLY INSTEAD OF JUST A FETCH STRAIN 

  
  render() {
    return (
      <div>
        <button
          value="Sativa"
          onClick={this.setFilter}>SATIVA
        </button>
        <button
          value="Hybrid"
          onClick={this.setFilter}>HYBRID
        </button>
        <button
          value="Indica"
          onClick={this.setFilter}>INDICA
        </button>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
strain: state.strain
})

const mapDispatchToProps = (dispatch) => ({
  addSativa: (sativa) => dispatch(addSativa(sativa))
  
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterControls);