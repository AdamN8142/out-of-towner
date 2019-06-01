import React, { Component } from 'react';
import { connect } from 'react-redux';

class StrainContainer extends Component {



  displayStrains = () => {
    let strainsToShow; 
    if(this.props.filter === 'Sativa') {
       strainsToShow =  this.props.strain.sativa.map((item)=> {
        return item.map((bud)=> {
          return ( 
            <li>{bud.name}</li>
          )
        })
      })
      return strainsToShow
    } else if (this.props.filter === 'Indica') {
      strainsToShow = this.props.strain.indica.map((item)=> {
        return item.map((bud)=> {
          return (
            <li>{bud.name}</li>
          )
        })
      })
      return strainsToShow
    } else if (this.props.filter === "Hybrid") {
      strainsToShow = this.props.strain.hybrid.map((item)=> {
        return item.map((bud)=> {
          return (
            <li>{bud.name}</li>
          )
        })
      })
      return strainsToShow
    }
  }
  


  render(){
    return (
          <div>
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








