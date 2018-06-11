import React, { Component } from "react";
import headshot from "./images/headshot.JPG";
import "./css/App.css";
import {Button, Grid, Row, Col}  from 'react-bootstrap';
import Demo from "./demo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={headshot} className="App-headshot" alt="logo" />
          <h1 className="App-title">Dan Seaman</h1>
          <h2>Software Engineer</h2>
        </header>
        <Demo dstring="filler"/>
      </div>
    );
  }
}

export default App;
