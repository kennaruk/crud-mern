import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HeaderNavContainer from './landing/HeaderNavContainer'; 
import ProductListContainer from './product/ProductListContainer';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';

const history = createBrowserHistory();
class App extends Component {
  
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <HeaderNavContainer/>
            <Switch>
              <Route exact path="/" component={ProductListContainer} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
