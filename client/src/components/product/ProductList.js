import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class ProductList extends Component {
    constructor(props) {
        super(props);
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

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: this.props.handleRowSelect,
            clickToSelect: true, 
            hideSelectColumn: true            
        };
    }
    render() {
        return (
            <BootstrapTable data={this.state.products} selectRow={this.selectRowProp} bordered={false} striped hover condensated>
                <TableHeaderColumn 
                    dataField="id"  
                    dataAlign="center" 
                    isKey 
                    dataSort
                    hidden
                    columnTitle
                > 
                    Product ID 
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="name"
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                > 
                Product Name 
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="price"
                    dataSort                 
                > 
                    Product Price 
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="description"
                    filter={{type: 'TextFilter', delay: 0 }}
                > 
                    Product Description 
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="stock"
                    dataSort                    
                > 
                    Product Stock 
                </TableHeaderColumn>
            </BootstrapTable>
        )
    }
}