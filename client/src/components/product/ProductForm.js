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
            isAdd: props.match.params.id === undefined
        }
        if(!this.state.isAdd) {
            this.product = this.findElement(this.props.products, 'id', this.state.productId);
        }

    }
    findElement = (arr, propName, propValue) => {
        for (var i=0; i < arr.length; i++)
            if (arr[i][propName] == propValue)
            return arr[i];
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
                    value = {this.product['name']}
                />
                <FieldGroup
                    id="productPrice"
                    type="text"
                    label="Product Price"
                    placeholder="Product Price"
                    value = {this.product['price']}
                    
                />
                <FieldGroup
                    id="productDescription"
                    type="text"
                    label="Product Description"
                    placeholder="Product Description"
                    value = {this.product['description']}
                    
                />
                <FieldGroup
                    id="productStock"
                    type="text"
                    label="Product Stock"
                    placeholder="Product Stock"
                    value = {this.product['stock']}
                    
                />
                <Button type="submit" bsStyle="primary">
                    <Glyphicon glyph="glyphicon glyphicon-floppy-saved"/> Save
                </Button>
                <Button>
                    <Glyphicon glyph="glyphicon glyphicon-remove"/> Cancel
                </Button>
                
            </form>
        )
    }
}