import React, { Component } from 'react';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import GameDetail from '../components/GameDetail/GameDetail';

class Promotion extends Component {
    render() {
        return (
            <div>
                <AboutBanner />
                <GameDetail />
            </div>
        );
    }
}

export default Promotion;
