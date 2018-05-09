import React, { Component } from 'react';
import { ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';
import ProductList from './ProductList'

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
            this.props.history.push(`/course/${selectProductId}`);
        }
    }

    handleDeleteProduct = () => {
        const selectProductId = this.state.selectedProductId;

        if(selectProductId) {
            this.setState({selectedProductId: null});
            //TODO: Add Delete Method
        }
    }

    handleRowSelect = (row, isSelected) => {
        if (isSelected) {
            this.setState({selectedProductId: row.id});
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
                        <ProductList handleRowSelect={this.handleRowSelect}/>
                </div>
            </div>
        )
    }
}
