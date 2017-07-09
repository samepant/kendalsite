import React, { Component } from 'react'
import './App.css'
import Pdfs from './pdfs'
import Images from './images'
import Links from './links'
import Email from './email'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pdfs />
        <Images />
        <Links />
        <Email />
      </div>
    )
  }
}

export default App
