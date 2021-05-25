import React, { Component } from 'react';
import './AboutBanner.css';
import './AboutBannerResponsive.css';

class AboutBanner extends Component {
    render() {
        var url_string = window.location.pathname //window.location.href
        var pathArray = url_string.split('/');

        return (
            <div>
                <section id="about_banner">
                    <div className="container px-lg-0">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <div className="about_menu">
                                    <h2>{pathArray[1].toUpperCase()}</h2>
                                    <div className="bread">
                                        <a href="/">Home</a><span>&gt;</span><a className="active" href="/about">{pathArray[1]}</a>
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
