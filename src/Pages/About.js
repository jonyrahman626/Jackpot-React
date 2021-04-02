import React, { Component } from 'react';
import Header from '../components/Header/Header';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import AboutGame from '../components/AboutGame/AboutGame';
import AboutMoreGame from '../components/AboutMoreGame/AboutMoreGame';
import Payment from '../components/Payment/Payment';
import Footer from '../components/Footer/Footer';

class About extends Component {
    render() {
        return (
            <div>
                <Header />

                <AboutBanner />

                <AboutGame />

                <AboutMoreGame />

                <Payment />
                
                <Footer />
            </div>
        );
    }
}

export default About;
