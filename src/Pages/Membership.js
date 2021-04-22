import React, { Component } from 'react';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import PricingDetail from '../components/PricingDetail/PricingDetail';

class Membership extends Component {
    render() {
        return (
            <div>
                <AboutBanner />
                <PricingDetail />
            </div>
        );
    }
}

export default Membership;
