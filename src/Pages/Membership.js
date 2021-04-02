import React, { Component } from 'react';
import Header from '../components/Header/Header';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import PricingDetail from '../components/PricingDetail/PricingDetail';
import Payment from '../components/Payment/Payment';
import Footer from '../components/Footer/Footer';

class Membership extends Component {
    render() {
        return (
            <div>
                <Header />
                <AboutBanner />
                <PricingDetail />
                <Payment />
                <Footer />
            </div>
        );
    }
}

export default Membership;
