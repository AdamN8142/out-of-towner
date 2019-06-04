import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import '../StrainContainer/StrainContainer.scss'
import { addDescription, addEffects, addFlavors } from '../../Actions'

class StrainContainer extends Component {

  displayStrains = () => {
    let strainsToShow; 
    if(this.props.filter === 'Sativa') {
       strainsToShow =  this.props.strain.sativa.map((bud)=> {
          return ( 
            <NavLink
            className='navlink'
            id={`${bud.id}`}
            onClick={this.handleClick}
            to={`/${this.props.match.params.strain}/${bud.name}`}
            >{bud.name}</NavLink>
          )
      })
      return strainsToShow
    } else if (this.props.filter === 'Indica') {
      strainsToShow = this.props.strain.indica.map((bud)=> {
          return (
            <NavLink
            className='navlink'
            id={`${bud.id}`}
            onClick={this.handleClick}
            to={`/${this.props.match.params.strain}/${bud.id}`}
            >{bud.name}</NavLink>
          )
      })
      return strainsToShow
    } else if (this.props.filter === "Hybrid" && this.props.strain.hybrid.length) {
      strainsToShow = this.props.strain.hybrid.map((bud)=> {
          return (
            <NavLink
            className='navlink'
            id={`${bud.id}`}
            onClick={this.handleClick}
            to={`/${this.props.match.params.strain}/${bud.id}`}
            >{bud.name}</NavLink>
          )
        })
      
      return strainsToShow
    }
  }
  
  fetchDetails = async (id) => {
    const url = `http://strainapi.evanbusse.com/AqtPtuS/strains/data/desc/${id}`
    const response = await fetch(url)
    const results = await response.json()
    return results
  }

  fetchEffects = async(id) => {
    const url = `http://strainapi.evanbusse.com/AqtPtuS/strains/data/effects/${id}`
    const response = await fetch(url)
    const result = await response.json()
    return result
  }

  fetchFlavors = async (id) => {
    const url =`http://strainapi.evanbusse.com/AqtPtuS/strains/data/flavors/${id}`
    const response = await fetch(url)
    const result = await response.json()
    return result
  }


  handleClick = async (event) => {
    const id = event.target.id
    console.log(id)
    const details = await this.fetchDetails(id)
    const effects = await this.fetchEffects(id)
    const flavors = await this.fetchFlavors(id)
     await this.props.addDetails(details.desc)
     await this.props.addEffects(effects)
     await this.props.addFlavors(flavors)
  }




  render(){
    return (
          <div className="strains-container">
              {this.displayStrains()}
          </div>
    )
  }
}


const mapStateToProps = (state) => ({
  strain: state.strain,
  filter: state.filter 
  })

const mapDispatchToProps = (dispatch) => ({
  addDetails: (description) => dispatch(addDescription(description)),
  addEffects: (effects) => dispatch(addEffects(effects)),
  addFlavors: (flavors) => dispatch(addFlavors(flavors))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(StrainContainer)








