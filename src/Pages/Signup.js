import React, { Component } from 'react';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import SignUpForm from '../components/SignUpForm/SignUpForm';

class Promotion extends Component {
    render() {
        return (
            <div>
                <AboutBanner />
                <SignUpForm />
            </div>
        );
    }
}

export default Promotion;