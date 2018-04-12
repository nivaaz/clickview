import React, { Component } from 'react';
import '../css/App.css';


export class Nav extends Component {
  render() {
    return (
     <div className = "Nav">
      <a> Search</a>
      <a>Category </a>
      <a> Tags</a>
      <a> Duration </a>

       </div>
    );
  }
}

export default Nav;
