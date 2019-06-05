import React, { Component } from 'react'
import { connect } from 'react-redux';
import './StrainCard.scss'
import { PropTypes } from 'prop-types';
import { NavLink} from 'react-router-dom'

class StrainCard extends Component {
  mappedEffects = () => {
    let effectObj = Object.entries(this.props.effects)
    return effectObj.map((effect)=> {
      return ( 
        <div>
        <p className='effect-title'>{effect[0].toUpperCase()} EFFECTS</p>
            {effect[1].map((item)=> {
              return (
                <li className='effect-name'>{item}</li>
              )
            })}        
        </div>
      )
    })
  }

  mappedFlavors = () => {
    let mappedFlavors = this.props.flavors.map((flavor)=> {
      return (
      
          <p className='flavor'>"{flavor}"</p>
        
      )
    })
    return mappedFlavors
  }


  render() {
     return (
       <div className='strain-card'>
       <NavLink className='back-button'to='/:strain'>BACK</NavLink>
         <h4 className='strain-bio'>{this.props.description && this.props.description? this.props.description : <p className='no-bio'>Appologies, we currently do not have a bio for this strain</p>}</h4>
         <div className='effects-container'>
           {this.mappedEffects() && this.mappedEffects()}
         </div>
         
         <div className= 'flavor-container'>
            <p className='flavor-text'></p>
           {this.mappedFlavors() && this.mappedFlavors()}
         </div>
       </div>

     )
  }
}


export const mapStateToProps = (state) => ({
  strain: state.strain,
  description: state.description,
  effects:state.effects,
  flavors: state.flavors
  })

  StrainCard.propTypes = {
    desciption: PropTypes.string,
    history: PropTypes.object, 
    location: PropTypes.object,
    match: PropTypes.object,
    flavors: PropTypes.array,
    effects: PropTypes.object,
    strain: PropTypes.object
  }

export default connect(mapStateToProps)(StrainCard)

