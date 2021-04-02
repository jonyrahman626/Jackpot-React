import React, { Component } from 'react';
import './AboutBanner.css';

class AboutBanner extends Component {
    render() {
        return (
            <div>
                <section id="about_banner">
                    <div className="container px-lg-0">
                        <div class="row text-center">
                            <div class="col-lg-12">
                                <div class="about_menu">
                                    <h2>About Us</h2>
                                    <div class="bread">
                                        <a href="/">Home</a><span>&gt;</span><a class="active" href="/about">About</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutBanner;
