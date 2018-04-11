import React, { Component } from 'react';
import '../css/App.css';
import {BasicExample} from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BasicExample/>
        <p className="App-intro">
        <i className="fas fa-child"></i>
        </p>
      </div>
    );
  }
}

export default App;
