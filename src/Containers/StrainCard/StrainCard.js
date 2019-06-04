import React, { Component } from 'react'
import { connect } from 'react-redux';
import './StrainCard.css'

class StrainCard extends Component {
  mappedEffects = () => {
    let effectObj = Object.entries(this.props.effects)
    return effectObj.map((effect)=> {
      return ( 
        <div>
        <p className='effect-title'>{effect[0].toUpperCase()} EFFECTS</p>
            {effect[1].map((item)=> {
              return (
                <li className='effect-name'>
                  {item}
                </li>
              )
            })}        
        </div>
      )
    })
  }

  mappedFlavors = () => {
    let mappedFlavors = this.props.flavors.map((flavor)=> {
      return (<p className='flavor'>{flavor}</p>)
    })
    return mappedFlavors
  }


  render() {
     return (
       <div>
         <h4 className='strain-bio'>{this.props.description}</h4>
         <div className='effects-container'>
           {this.mappedEffects()}
         </div>
         <p>FLAVORS</p>
         <div className= 'flavor-container'>
           {this.mappedFlavors()}
         </div>
       </div>

     )
  }
}


const mapStateToProps = (state) => ({
  strain: state.strain,
  description: state.description,
  effects:state.effects,
  flavors: state.flavors
  })


export default connect(mapStateToProps)(StrainCard)