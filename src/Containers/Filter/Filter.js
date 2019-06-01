import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSativa, addIndica, addHybrid, setFilter } from '../../Actions'
import StrainContainer from '../StrainContainer/StrainContainer'


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
    this.displayLinks()
  }

  fetchStrain = async (strain) => {
    const url = `http://strainapi.evanbusse.com/AqtPtuS/strains/search/race/${strain}`
    const response = await fetch(url)
    const results = await response.json()
    return results
  }

  displayLinks = () => {
    const mappedLinks = this.props.strain.indica.map((item)=> {
      const links = item.map((bud)=>{
        console.log(bud.name)
        return (      
          <div>
            
          </div>
        )
    })
  })
}


  render(){
    return (
      <div>
        <button onClick={() => this.handleClick()}>{this.props.children}</button>
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


//on cliick, take in the value of the button or pull from state the selectedStrain
//