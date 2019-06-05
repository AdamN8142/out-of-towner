import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import '../StrainContainer/StrainContainer.scss'
import { addDescription, addEffects, addFlavors, setError, isLoading } from '../../Actions'

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
    try{
      const url = `http://strainapi.evanbusse.com/AqtPtuS/strains/data/desc/${id}`
      this.props.isLoading(true)
      const response = await fetch(url)
      const results = await response.json()
      this.props.isLoading(false)
      return results
    }
    catch(error){
      this.props.setError(error.message)
    }
  }

  fetchEffects = async(id) => {
    try{
      const url = `http://strainapi.evanbusse.com/AqtPtuS/strains/data/effects/${id}`
      this.props.isLoading(true)
      const response = await fetch(url)
      const result = await response.json()
      this.props.isLoading(false)
      return result
    }catch(error){
      this.props.setError(error.message)
    }
  }

  fetchFlavors = async (id) => {
    try{
      const url =`http://strainapi.evanbusse.com/AqtPtuS/strains/data/flavors/${id}`
      this.props.isLoading(true)
      const response = await fetch(url)
      const result = await response.json()
      this.props.isLoading(false)
      return result
    }catch(error) {
      this.props.setError(error.message)
    }
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
              {this.props.loading ? <h1>Loading...</h1> :this.displayStrains()}
          </div>
    )
  }
}


export const mapStateToProps = (state) => ({
  strain: state.strain,
  filter: state.filter,
  loading: state.loading,
  error: state.error
  })

export const mapDispatchToProps = (dispatch) => ({
  addDetails: (description) => dispatch(addDescription(description)),
  addEffects: (effects) => dispatch(addEffects(effects)),
  addFlavors: (flavors) => dispatch(addFlavors(flavors)),
  setError: (message) => dispatch(setError(message)),
  isLoading: (bool) => dispatch(isLoading(bool))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(StrainContainer)








