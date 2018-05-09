import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HeaderNavContainer from './landing/HeaderNavContainer'; 
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import ProductListContainer from './product/ProductListContainer';
import ProductForm from './product/ProductForm';

const history = createBrowserHistory();
class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
          {
              id: 1,
              name: "Water",
              price: 20.8,
              description: "Water with mineral",
              stock: 3
          },
          {
              id: 2,
              name: "Kitat",
              price: 40,
              description: "Chocolate with biscuit",
              stock: 20
          }
      ]
    }
  }
  renderProductListContainer = (props) => {
    return (
      <ProductListContainer products={this.state.products} {...props}/>
    )
  }
  renderProductForm = (props) => {
    return (
      <ProductForm products={this.state.products} {...props}/>
    )
  }
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <HeaderNavContainer/>
            <Switch>
              <Route exact path="/" render={this.renderProductListContainer} />
              <Route exact path="/product" render={this.renderProductForm} />
              <Route path="/product/:id" render={this.renderProductForm} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
