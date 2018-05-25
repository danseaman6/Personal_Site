import React, { Component } from "react";
import logo from "./images/logo.svg";
import "./css/App.css";

const Demo = () => {
  return (
    <div>
      <h3>This is a demo stateless component.</h3>
      {this.props.dstring}
    </div>
  );
};

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
        <Demo dstring="anonymous prop string" />
      </div>
    );
  }
}

export default App;
