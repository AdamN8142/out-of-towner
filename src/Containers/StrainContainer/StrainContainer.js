import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import '../StrainContainer/StrainContainer.scss'
import { addDescription } from '../../Actions'

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
            to={`/${this.props.match.params.strain}/${bud.name}`}
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
            to={`/${this.props.match.params.strain}/${bud.name}`}
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



  handleClick = async (event) => {
    const id = event.target.id
    console.log(id)
    // const filter = this.props.filter
    const details = await this.fetchDetails(id)
    console.log(details)
    console.log(details.desc)
    // console.log( details, id, filter )
     await this.props.addDetails(details.desc)
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
  addDetails: (description) => dispatch(addDescription(description))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(StrainContainer)








