import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import configureStore from './redux/store';
import HourTracker from './containers/HourTracker/HourTracker';
import TotalHours from './containers/TotalHours/TotalHours';

import './App.css';

const store = configureStore({});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
