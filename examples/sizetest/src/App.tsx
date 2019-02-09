import * as p1 from 'p-1';
import * as p2 from 'p-2';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  public test() {
    const x = new p1.Greeter("WarrickA");
    const y = new p2.Greeter("WarrickB");
    alert('test' + x.greet());
    alert('test' + y.greet());
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.test}>
          Button 1
        </button>
      </div>
    );
  }
}

export default App;
