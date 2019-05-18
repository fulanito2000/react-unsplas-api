import React, { Component } from 'react';
import { render } from 'react-dom';
import Buscador from './Buscador';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Buscador/>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
