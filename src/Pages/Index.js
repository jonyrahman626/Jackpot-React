import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Game from '../components/Game/Game';
import Spiner from '../components/Spiner/Spiner';
import Pricing from '../components/Pricing/Pricing';
import Tounament from '../components/Tounament/Tounament';
import Payment from '../components/Payment/Payment';
import Footer from '../components/Footer/Footer';

class Index extends Component {
    render() {
        return (
            <div>
                <Header />

                <Banner />

                <Game />

                <Spiner />

                <Pricing />

                <Tounament />

                <Payment />

                <Footer />
            </div>
        );
    }
}

export default Index;
