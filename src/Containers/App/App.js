import React, { Component } from 'react';
import FilterControls from '../FilterControls/FilterControls'
import '../App/App.scss'
import StrainContainer from '../StrainContainer/StrainContainer'
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends Component{

  render() {
    return (
        <Switch>
          <Route exact path = '/' component={FilterControls} />
          <Route path = '/:strain' component={StrainContainer} />
        </Switch>
    );
  }
}

export default withRouter(App);
