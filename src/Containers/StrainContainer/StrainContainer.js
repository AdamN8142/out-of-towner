import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import '../StrainContainer/StrainContainer.scss'

class StrainContainer extends Component {

  displayStrains = () => {
    let strainsToShow; 
    if(this.props.filter === 'Sativa') {
       strainsToShow =  this.props.strain.sativa.map((item)=> {
        return item.map((bud)=> {
          return ( 
            <NavLink
            className='navlink'
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
            to={`/${this.props.match.params.strain}/${bud.name}`}
            >{bud.name}</NavLink>
          )
        })
      })
      return strainsToShow
    }
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

export default connect(mapStateToProps)(StrainContainer)








