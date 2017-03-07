import React from 'react';

export default class CounterComponent extends React.Component {
  
  // This Method supports only in Component
  constructor(props) {
    super(props);   // This is mandatory to use if override constructor method
    this.state = {
      count: 1,
    }
    // 'this' can be binded to function like below line
    this.incrementCount = this.incrementCount.bind(this);
  }
  
  incrementCount() {
    this.setState({ count : this.state.count +2 });
  }
    
  render() {
    return (
      <div>
        <h1> Counter using React Component </h1>
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
};