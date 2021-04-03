import React, { Component } from 'react';
import Header from '../components/Header/Header';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import LoginForm from '../components/LoginForm/LoginForm';
import Payment from '../components/Payment/Payment';
import Footer from '../components/Footer/Footer';

class Promotion extends Component {
    render() {
        return (
            <div>
                <Header />
                <AboutBanner />
                <LoginForm />
                <Payment />
                <Footer />
            </div>
        );
    }
}

export default Promotion;