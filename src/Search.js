import React, { Component } from 'react';
import Display from './Display.js';
import './Display.css';

require('dotenv').config()

class Search extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
      count: 0,
      // value:'bbc-news'
      value: this.props.default
    };
  }

  render() {
    return (
      <div >
        <Display default={this.state.value} />
      </div>
    );
  }
}

export default Search;
