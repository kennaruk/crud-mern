import React, { Component } from 'react';
import { Glyphicon, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

var FieldGroup = ({ id, label, help, ...props }) => {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {/* {help && <HelpBlock>{help}</HelpBlock>} */}
      </FormGroup>
    );
  }

export default class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: props.match.params.id,
            isAdd: props.match.params.id === undefined,
            product: this.findElement(this.props.products, 'id', props.match.params.id)
        }
    }
    
    handleSaveButton = () => {
        //TODO: Call handleEditProduct or handleNewProduct
        if(!this.state.isAdd)
            this.props.handleEditProduct(this.state.product)
        else
            this.props.handleNewProduct(this.state.product)
        this.props.history.replace('/');
    }

    handleCancelButton = () => {
        this.props.history.replace('/');
    }

    findElement = (arr, propName, propValue) => {
        for (var i=0; i < arr.length; i++)
            if (arr[i][propName] == propValue)
                return arr[i];
        return {}
    }

    cloneJSON = (json) => {
        return JSON.parse(JSON.stringify(json));
    } 

    handleProductNameOnChange = (event) => {
        let newProduct = this.cloneJSON(this.state.product);
        newProduct['name'] = event.target.value;
        this.setState({
            product: newProduct
        });
    }
    
    handleProductPriceOnChange = (event) => {
        let newProduct = this.cloneJSON(this.state.product);
        newProduct['price'] = event.target.value;
        this.setState({
            product: newProduct
        });
    } 

    handleProductDescriptionOnChange = (event) => {
        let newProduct = this.cloneJSON(this.state.product);
        newProduct['description'] = event.target.value;
        this.setState({
            product: newProduct
        });
    }

    handleProductStockOnChange = (event) => {
        let newProduct = this.cloneJSON(this.state.product);
        newProduct['stock'] = event.target.value;
        this.setState({
            product: newProduct
        });
    }

    render() {
        return (
            <form>
                <h1> {this.state.isAdd ? 'Add' : 'Edit'} </h1> 

                <FieldGroup
                    id="productName"
                    type="text"
                    label="Product Name"
                    placeholder="Product Name"
                    onChange = {this.handleProductNameOnChange}
                    value = {this.state.product === undefined ? '' : this.state.product['name']}
                />
                <FieldGroup
                    id="productPrice"
                    type="text"
                    label="Product Price"
                    placeholder="Product Price"
                    onChange = {this.handleProductPriceOnChange}
                    value = {this.state.product === undefined ? '' : this.state.product['price']}
                />
                <FieldGroup
                    id="productDescription"
                    type="text"
                    label="Product Description"
                    placeholder="Product Description"
                    onChange = {this.handleProductDescriptionOnChange}
                    value = {this.state.product === undefined ? '' : this.state.product['description']}
                />
                <FieldGroup
                    id="productStock"
                    type="text"
                    label="Product Stock"
                    placeholder="Product Stock"
                    onChange = {this.handleProductStockOnChange}
                    value = {this.state.product === undefined ? '' : this.state.product['stock']}
                />

                <Button onClick={this.handleSaveButton} bsStyle="primary">
                    <Glyphicon glyph="glyphicon glyphicon-floppy-saved"/> Save
                </Button>
                <Button onClick={this.handleCancelButton}>
                    <Glyphicon glyph="glyphicon glyphicon-remove"/> Cancel
                </Button>
                
            </form>
        )
    }
}