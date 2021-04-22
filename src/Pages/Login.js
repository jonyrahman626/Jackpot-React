import React, { Component } from 'react';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import LoginForm from '../components/LoginForm/LoginForm';

class Promotion extends Component {
    render() {
        return (
            <div>
                <AboutBanner />
                <LoginForm />
            </div>
        );
    }
}

export default Promotion;