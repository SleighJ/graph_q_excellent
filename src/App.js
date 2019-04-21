import React, { Component } from 'react';

import './App.css';
import LinkList from "./linklist";

class App extends Component {
    constructor(props){
       super(props);

       this.state = {
           data: null,
       }
    }
  render() {
    return <LinkList />
  }
}

export default App;
