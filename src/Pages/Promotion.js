import React, { Component } from 'react';
import Header from '../components/Header/Header';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import PromotionCoin from '../components/PromotionCoin/PromotionCoin';
import PromotionPlayer from '../components/PromotionPlayer/PromotionPlayer';
import PromotionBonus from '../components/PromotionBonus/PromotionBonus';
import Payment from '../components/Payment/Payment';
import Footer from '../components/Footer/Footer';

class Promotion extends Component {
    render() {
        return (
            <div>
                <Header />
                <AboutBanner />
                <PromotionCoin />
                <PromotionPlayer />
                <PromotionBonus />
                <Payment />
                <Footer />
            </div>
        );
    }
}

export default Promotion;
