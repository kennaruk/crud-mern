import React, { Component } from 'react';
import { ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';
import ProductList from './ProductList'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export default class CourseListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProductId: null
        }
    }

    handleAddProduct = () => {
        this.props.history.push('/product');
    }

    handleEditProduct = () => {
        const selectProductId = this.state.selectedProductId;

        if(selectProductId) {
            this.setState({selectProductId: null});
            this.props.history.push(`/product/${selectProductId}`);
        }
    }

    handleDeleteProduct = () => {
        const selectProductId = this.state.selectedProductId;

        if(selectProductId) {
            confirmAlert({
                title: 'Confirm to delete',
                message: 'Are you sure to do this.',
                buttons: [
                    {
                        //TODO: Yes with data binding handleDeleteProduct
                        label: 'Yes',
                        onClick: () => this.props.handleDeleteProduct(selectProductId)
                    },
                    {
                        label: 'No'
                    }
                ]
            })
              
            this.setState({selectedProductId: null});
              
        }
    }

    handleRowSelect = (row, isSelected) => {
        if (isSelected) {
            this.setState({selectedProductId: row._id});
        }
    }

    render() {
        return (
            <div className = "container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Courses</h1>                        
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <ButtonToolbar>
                            <Button bsStyle="primary"
                                onClick={this.handleAddProduct}
                            >
                                <Glyphicon glyph="glyphicon glyphicon-plus"/>  New
                            </Button>
                                
                            <Button bsStyle="warning"
                                onClick={this.handleEditProduct}
                            >
                                <Glyphicon glyph="glyphicon glyphicon-pencil"/> Edit
                            </Button>
                                
                            <Button bsStyle="danger"
                                onClick={this.handleDeleteProduct}
                            >
                                <Glyphicon glyph="glyphicon glyphicon-trash"/> Delete
                            </Button>
                        </ButtonToolbar>
                    </div>
                </div>

                <div className="row">
                        <ProductList handleRowSelect={this.handleRowSelect} products={this.props.products}/>
                </div>
            </div>
        )
    }
}
