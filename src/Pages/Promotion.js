import React, { Component } from 'react';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import PromotionCoin from '../components/PromotionCoin/PromotionCoin';
import PromotionPlayer from '../components/PromotionPlayer/PromotionPlayer';
import PromotionBonus from '../components/PromotionBonus/PromotionBonus';

class Promotion extends Component {
    render() {
        return (
            <div>
                <AboutBanner />
                <PromotionCoin />
                <PromotionPlayer />
                <PromotionBonus />
            </div>
        );
    }
}

export default Promotion;
