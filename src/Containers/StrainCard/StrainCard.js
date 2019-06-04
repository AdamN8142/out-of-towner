import React, { Component } from 'react'
import { connect } from 'react-redux';

class StrainCard extends Component {

  render() {
     return (
       <div>
         <h1>{this.props.description}</h1>
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