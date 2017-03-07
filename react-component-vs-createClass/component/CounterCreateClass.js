import React from 'react';

export default React.createClass({
  // This Method supports only in createClass
  getInitialState: function(){
     return {
       count: 0
     }
  },
  
  // In this methos 'this' will be automatically binded
  incrementCount: function(){
    this.setState({ count: this.state.count + 2 });
  },
  
  render: function(){
    return (
      <div>
        <h1> Counter using React createClass </h1>
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});