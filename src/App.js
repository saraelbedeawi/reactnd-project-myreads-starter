import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Page from './Components/Page'

class App extends Component {
  render() {
    return (
      <div className="app">
      	<Switch>
      	  <Route exact path="/" component={Page} />
      	</Switch>
      </div>
    )
  }
}

export default App
