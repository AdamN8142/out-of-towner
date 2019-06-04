import React, { Component } from 'react'
import { connect } from 'react-redux';

class StrainCard extends Component {



  // mappedEffects = () => {
  //   let effectObj = Object.entries(this.props.effects)
  //   return effectObj.map((effect)=> {
  //     return ( `${effect[0]}: ${effect[1]} `)
  //   })
  // }

  mappedEffects = () => {
    let effectObj = Object.entries(this.props.effects)
    return effectObj.map((effect)=> {
      return ( 
        <div>
        <h3>{effect[0].toUpperCase()}</h3>
            {effect[1].map((item)=> {
              return (
                <li>
                  {item}
                </li>
              )
            })}        
        </div>
      )
    })
  }




  render() {
     return (
       <div>
         <h4>{this.props.description}</h4>
         {this.mappedEffects()}
       </div>

     )
  }
}


const mapStateToProps = (state) => ({
  strain: state.strain,
  description: state.description,
  effects:state.effects
  })


export default connect(mapStateToProps)(StrainCard)