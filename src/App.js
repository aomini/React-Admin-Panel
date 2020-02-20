import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Navbar />
        <Route
          path="/"
          exact
          render={() => <Content title="Dashboard" contentTag="dashboard" />}
        />
        <Route
          path="/dashboard2"
          render={() => <Content title="Dashboard2" contentTag="dashboard2" />}
        />
      </div>
    );
  }
}

export default App;
