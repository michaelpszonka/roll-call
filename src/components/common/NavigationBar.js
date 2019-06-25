import React from 'react';
import PropTypes from 'prop-types'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = (props) => {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Roll Call</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to="/members">
                        <NavItem>Members</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/bills">
                        <NavItem>Bills</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/votes">
                        <NavItem>Votes</NavItem>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;