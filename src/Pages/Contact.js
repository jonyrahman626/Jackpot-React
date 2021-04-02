import React, { Component } from 'react';
import Header from '../components/Header/Header';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import Payment from '../components/Payment/Payment';
import Footer from '../components/Footer/Footer';

class Membership extends Component {
    render() {
        return (
            <div>
                <Header />
                <AboutBanner />
                <ContactInfo />
                <Payment />
                <Footer />
            </div>
        );
    }
}

export default Membership;
