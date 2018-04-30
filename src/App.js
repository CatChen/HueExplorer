import HueBridge from './HueBridge';
import HueBridgeList from './HueBridgeList';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

window.HueBridgeList = HueBridgeList;
window.HueBridge = HueBridge;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
