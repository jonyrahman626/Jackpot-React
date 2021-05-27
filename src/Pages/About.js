import React, { Component } from 'react';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import AboutGame from '../components/AboutGame/AboutGame';
import AboutMoreGame from '../components/AboutMoreGame/AboutMoreGame';

class About extends Component {
    
    render() {
        
        return (
            <div>

                <AboutBanner />

                <AboutGame />

                <AboutMoreGame />
            </div>
        );
    }
}

export default About;
