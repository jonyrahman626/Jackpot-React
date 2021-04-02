import React, { Component } from 'react';
import Header from '../components/Header/Header';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import PromotionCoin from '../components/PromotionCoin/PromotionCoin';
import Footer from '../components/Footer/Footer';

class Promotion extends Component {
    render() {
        return (
            <div>
                <Header />
                <AboutBanner />
                <PromotionCoin />
                <Footer />
            </div>
        );
    }
}

export default Promotion;
