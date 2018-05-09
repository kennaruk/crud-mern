import React, { Component } from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap'

export default class HeaderNavContainer extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/home">Product Stock</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/home">
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href="/about">
                        About
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}
