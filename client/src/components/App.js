import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HeaderNavContainer from './landing/HeaderNavContainer'; 
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import ProductListContainer from './product/ProductListContainer';
import ProductForm from './product/ProductForm';

const history = createBrowserHistory();
class App extends Component {

  componentDidMount() {
    // console.log('Did mount')
    fetch('/getallproducts')
    .then(res => res.json())
    .then(res => 
      this.setState({
        products: res.data
      })
    );
  }

  constructor() {
    super();
    this.state = {
      //DidMount fetch products from api
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

  handleEditProduct = (product) => {
    //TODO: Call API Update By Id
    let products = this.state.products.slice();
    console.log('product:', product)
    products = products.map((obj) => {
      if(obj['_id'] == product._id)
        return product;
      return obj;
    });
    

    // console.log('product before put:', JSON.stringify(product))
    // var data = new FormData();
    // data.append( "json", JSON.stringify( product ) );

    fetch('/update/product', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(res => {
      if(res.success) {
        this.setState({
          products: products
        });
      } else {
        console.log(res.message)
      }
    });

    
  }

  handleNewProduct = (product) => {
    fetch('/addproduct', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(res => {
      console.log('res from add product:', res)
    })
    
    //TODO: Call API Add New Product
    let products = this.state.products.slice();
    products.push(product);
    
    this.setState({
      products: products
    });
  }

  handleDeleteProduct = (id) => {
    //TODO: Call API Delete By Id
    fetch('/delete/product', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({_id: id})
    })
    .then(res => res.json())
    .then(res => {
      console.log('res from delte product:', res)
    })

    let products = this.state.products.slice();
    products = products.filter((obj) => {
      return obj['_id'] != id;
    });

    this.setState({
      products: products
    });
  }

  renderProductListContainer = (props) => {
    return (
      <ProductListContainer 
        products={this.state.products} 
        {...props}
        handleDeleteProduct={this.handleDeleteProduct}
      />
    )
  }

  renderProductForm = (props) => {
    return (
      <ProductForm 
        products={this.state.products} 
        {...props} 
        handleNewProduct={this.handleNewProduct}
        handleEditProduct={this.handleEditProduct}
      />
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
