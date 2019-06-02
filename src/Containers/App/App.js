import React, { Component } from 'react';
import FilterControls from '../FilterControls/FilterControls'
import '../App/App.scss'
import StrainContainer from '../StrainContainer/StrainContainer'
import { Route, Switch, withRouter } from 'react-router-dom'
import StrainCard from '../StrainCard/StrainCard'

class App extends Component{

  render() {
    return (
        <Switch>
          <Route exact path = '/' component={FilterControls} />
          <Route exact path = '/:strain' component={StrainContainer} />
          <Route exact path = '/:strain/:id' component={StrainCard} />
        </Switch>
    );
  }
}

export default withRouter(App);







