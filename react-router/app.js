import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import Home from './component/Home';
import About from './component/Home';
import Contact from './component/Home';
import Landing from './component/Landing';

ReactDOM.render((
  <Router history = {browserHistory}>
    <Route path = "/" component = {Landing}>
      <IndexRoute component = {Home} />
      <Route path = "home" component = {Home} />
      <Route path = "/about" component = {About} />
      <Route path = "contact" component = {Contact} />
    </Route>
  </Router>
  ),
  document.getElementById('app')
);
