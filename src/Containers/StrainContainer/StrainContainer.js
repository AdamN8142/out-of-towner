import React, { Component } from 'react';
import { connect } from 'react-redux';

class StrainContainer extends Component {



  // showWeed = () => {
  //   let weedtoShow 
  //  if(this.props.fitler === ' ')
    
  // }


  //make function in this component and run that func in 
  render(){
    console.log(this.props)
    return(
  
        <ul>
        {this.props.strain.sativa.map((item)=> {
           return item.map((bud)=>{
            return (   
            <li>{bud.name}</li>
            )
          })
        })
      }
        </ul>
      
    )
  }
}


const mapStateToProps = (state) => ({
  strain: state.strain,
  filter: state.filter 
  })

export default connect(mapStateToProps)(StrainContainer)




