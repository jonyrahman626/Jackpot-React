import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';
import logo from '../../assets/images/menu_logo.png';


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="main_menu" expand="lg">
                    <div className="container px-lg-0">
                        <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About Us</Nav.Link>
                                <Nav.Link href="#link">Promotion</Nav.Link>
                                <Nav.Link href="#link">Games</Nav.Link>
                                <Nav.Link href="#link">Membership</Nav.Link>
                                <Nav.Link href="#link">Contact</Nav.Link>
                                <Nav.Link href="#link">404</Nav.Link>
                            </Nav>
                            <div className="menu_btn">
                                <a href="/">Singup</a>
                                <a href="/">Login</a>
                            </div>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;
