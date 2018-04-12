import React, { Component } from 'react';
import '../css/App.css';
import {Nav}from '../Components/Nav.js'
import {VideoContainer} from '../Components/VideoContainer.js'
import {SearchBar} from '../Components/SearchBar.js'

class App extends Component {
  constructor(props) {
    super(props);  
    this.state = {
       tags: [], 
       level :0
    }
  }
  render() {
    return (
      <div className="App">
      <Nav/>
      <SearchBar/>
      <VideoContainer
      tags ={this.state.tags}
      videos ={this.state.videos}/>
      </div>
    );
  }
}

export default App;
