import React, { Component } from 'react';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import AboutGame from '../components/AboutGame/AboutGame';
import AboutMoreGame from '../components/AboutMoreGame/AboutMoreGame';

const About = () =>{
    
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
