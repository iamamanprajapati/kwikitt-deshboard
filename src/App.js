import React, { Component } from 'react';
import './App.css';
import Deshboard from './Deshboard'

class App extends Component {
  constructor(){
    super()
    global.MyVar="http://localhost:8080"
  }
  render() {
    return (
      <Deshboard />
    );
  }
}

export default App;