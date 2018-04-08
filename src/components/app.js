import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import JobsList from './JobsList';
import Job from './Job';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={JobsList} />
          <Route path="/jobs/:id" component={Job} />
        </Switch>
      </Router>
    );
  }
}

export default App
