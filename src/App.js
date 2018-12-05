import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './App.css';

const Dashboard = () => <h2>Dashboard</h2>;
const About = () => <h2>About</h2>;
const NoMatch = () => <h2>no</h2>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
              <li>
                <Link to="/dashboard/">Dashboard</Link>
              </li>
            </ul>
          </nav> */}
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/about/" component={About} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <Route component={NoMatch} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
