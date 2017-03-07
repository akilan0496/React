import React from 'react';
import CounterComponent from './CounterComponent';
import CounterCreateClass from './CounterCreateClass'

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