import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Error from '../components/Error/Error';
import Payment from '../components/Payment/Payment';
import Footer from '../components/Footer/Footer';

class Promotion extends Component {
    render() {
        return (
            <div>
                <Header />
                <Error />
                <Payment />
                <Footer />
            </div>
        );
    }
}

export default Promotion;
