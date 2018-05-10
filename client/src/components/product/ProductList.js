import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class ProductList extends Component {
    constructor(props) {
        super(props);

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
            <BootstrapTable data={this.props.products} selectRow={this.selectRowProp} striped hover condensated>
                <TableHeaderColumn 
                    dataField="_id"  
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