import React from 'react';
import CounterComponent from './CounterComponent.js';
import CounterCreateClass from './CounterCreateClass.js'

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <CounterComponent/>
        <CounterCreateClass/>
      </div>
    );
  }
}