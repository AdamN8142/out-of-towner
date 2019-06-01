import React, { Component } from 'react';
import { connect } from 'react-redux';

class StrainContainer extends Component {
  render(){
    return(
      <div>
        <ul>
          
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  strain: state.strain,
  filter: state.filter 
  })

export default connect(mapStateToProps)(StrainContainer)