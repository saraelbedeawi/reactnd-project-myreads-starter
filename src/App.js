import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Page from './Components/Page'
import SearchBar from './Components/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="app">
      	<Switch>
      	  <Route exact path="/" component={Page} />
          {/* <Route path="/search" component={SearchBar} /> */}
      	</Switch>
      </div>
    )
  }
}

export default App
