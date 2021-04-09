import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/menu_logo.png';
import './Header.css';
import './HeaderResponsive.css';


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
                                <Link to="/">Home</Link>
                                <Link to="/about">About Us</Link>
                                <Link to="/promotion">Promotion</Link>
                                <Link to="/games">Games</Link>
                                <Link to="/membership">Membership</Link>
                                <Link to="/contact">Contact</Link>
                                <Link to="/error">404</Link>
                            </Nav>
                            <div className="menu_btn">
                                <Link to="/singup">Singup</Link>
                                <Link to="/login">Login</Link>
                            </div>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;
