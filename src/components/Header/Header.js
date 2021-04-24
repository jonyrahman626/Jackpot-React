import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/images/menu_logo.png';
import './Header.css';
import './HeaderResponsive.css';


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="main_menu" expand="md">
                    <div className="container px-md-0">
                        <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <NavLink exact to="/">Home</NavLink>
                                <NavLink exact to="/about">About Us</NavLink>
                                <NavLink exact to="/promotion">Promotion</NavLink>
                                <NavLink exact to="/games">Games</NavLink>
                                <NavLink exact to="/membership">Membership</NavLink>
                                <NavLink exact to="/contact">Contact</NavLink>
                                <NavLink exact to="/error">404</NavLink>
                            </Nav>
                            <div className="menu_btn">
                                <NavLink to="/singup">Singup</NavLink>
                                <NavLink to="/login">Login</NavLink>
                            </div>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;
