import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HourTracker from './containers/HourTracker/HourTracker';
import TotalHours from './containers/TotalHours/TotalHours';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <ul className="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/total-hours">Total Hours</Link></li>
          </ul>
          <Route exact path="/" component={HourTracker} />
          <Route path="/total-hours" component={TotalHours} />
        </div>
      </Router>
    );
  }
}

export default App;
