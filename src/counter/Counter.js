import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    this.state = {
      count: 0,
    }
  }

  increment = () => {
    this.setState({ count: ++this.state.count });
  }

  decrement = () => {
    this.setState({ count: --this.state.count });
  }

  render = () => {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;