import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Content from './Content.js';

export default React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
});