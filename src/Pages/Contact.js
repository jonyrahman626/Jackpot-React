import React, { Component } from 'react';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import ContactInfo from '../components/ContactInfo/ContactInfo';

class Membership extends Component {
    render() {
        return (
            <div>
                <AboutBanner />
                <ContactInfo />
            </div>
        );
    }
}

export default Membership;
