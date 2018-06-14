import React, { Component } from "react";
import headshot from "./images/headshot.jpg";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import "bootstrap/dist/css/bootstrap.css";
import "./css/App.css";
import { Button, Grid, Row, Col } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={headshot} className="App-headshot" alt="headshot" />
          <h1 className="App-title">Dan Seaman</h1>
          <h2>Cambridge/Boston</h2>
          <h3>Software Engineer</h3>
        </header>
        <Grid className="App-icon-grid">
          <Row>
            <Col xs={12} sm={3} md={2} lg={2} smOffset={3} mdOffset={4} lgOffset={4}>
              <Button
                className="App-icon-button"
                href="https://linkedin.com/in/danseaman6"
              >
                <img src={linkedin} className="App-link-icon" alt="linkedin" />
              </Button>
            </Col>
            <Col xs={12} sm={4} md={2} lg={2}>
              <Button
                className="App-icon-button"
                href="https://github.com/danseaman6"
              >
                <img src={github} className="App-link-icon" alt="github" />
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
