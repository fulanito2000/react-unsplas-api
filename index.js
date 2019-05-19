import React, { Component } from 'react';
import { render } from 'react-dom';
import Buscador from './Buscador';
import './style.css';
/*
son los includes como en python
*/ 
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  /*
    el render es igual que en flask !
    me devuelve un template con la informacion
  */
  render() {return (<Buscador/>);}
}

render(<App />, document.getElementById('root'));