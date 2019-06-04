import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import '../StrainContainer/StrainContainer.scss'
import { addDescription } from '../../Actions'

class StrainContainer extends Component {

  displayStrains = () => {
    let strainsToShow; 
    if(this.props.filter === 'Sativa') {
       strainsToShow =  this.props.strain.sativa.map((item)=> {
        return item.map((bud)=> {
          return ( 
            <NavLink
            className='navlink'
            id={`${bud.id}`}
            to={`/${this.props.match.params.strain}/${bud.name}`}
            >{bud.name}</NavLink>
          )
        })
      })
      return strainsToShow
    } else if (this.props.filter === 'Indica') {
      strainsToShow = this.props.strain.indica.map((item)=> {
        return item.map((bud)=> {
          return (
            <NavLink
            className='navlink'
            id={`${bud.id}`}
            to={`/${this.props.match.params.strain}/${bud.name}`}
            >{bud.name}</NavLink>
          )
        })
      })
      return strainsToShow
    } else if (this.props.filter === "Hybrid") {
      strainsToShow = this.props.strain.hybrid.map((item)=> {
        return item.map((bud)=> {
          return (
            <NavLink
            className='navlink'
            id={`${bud.id}`}
            onClick={this.handleClick}
            to={`/${this.props.match.params.strain}/${bud.name}`}
            >{bud.name}</NavLink>
          )
        })
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
    const filter = this.props.filter
    const details = await this.fetchDetails(id)
    console.log(details)
    // console.log( details, id, filter )
     this.props.addDetails(id, details.desc, filter)
  }


  //I can console log the detils for each one that i click on so i know im getting the right details. just having issued setting it to the store 


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
  addDetails: (id) => dispatch(addDescription(id))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(StrainContainer)








