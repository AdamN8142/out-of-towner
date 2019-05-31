import React, { Component } from 'react';
import { connect } from 'react-redux'

class FilterControls extends Component {
  render() {
    return (
      <div>
        <button>SATIVA</button>
        <button>HYBRID</button>
        <button>INDICA</button>
      </div>

    )
  }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterControls);