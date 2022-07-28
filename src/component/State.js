import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button
          style={{ backgroundColor: "green", padding: 10, borderRadius: 5 }}
          onClick={this.handleIncrement}
        >
          +
        </button>
        <button
          style={{ backgroundColor: "green", padding: 10, borderRadius: 5 }}
          onClick={this.handleDecrement}
          disabled={count == 0 ? true : false}
        >
          -
        </button>
      </div>
    );
  }
}
export default State;
