import React, { Component } from "react";
import logo from "./images/logo.svg";
import "./css/App.css";
import {Button}  from 'react-bootstrap';
import Demo from "demo";

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
        <p>You know the drill: HELLO, WORLD! (TEST)</p>
        <Button disabled={true}>
          This is a demo
        </Button>
        <Demo dstring="try this stateless component"/>
      </div>
    );
  }
}

export default App;
