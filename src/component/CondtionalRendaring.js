import React, { Component } from "react";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
class CondtionalRendaring extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    const { isLoggedIn } = this.state;
    return <div>{isLoggedIn ? <Dashboard /> : <Signup />}</div>;
  }
}

export default CondtionalRendaring;
