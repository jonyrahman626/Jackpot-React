import React, { Component } from 'react';
import BannerImg from '../../assets/images/index_banner.png'; 
import './Banner.css';
import './BannerResponsive.css';

class Banner extends Component {
    render() {
        return (
            <div>
                <section id="banner_part">
                    <div className="container px-lg-0">
                        <div className="row">
                            <div className="col-lg-5 col-xl-5 col-md-6 pl-md-0 d-none d-md-block">
                                <div className="banner_img">
                                    <img src={BannerImg} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-5 col-md-6 col-12 pr-md-0 offset-lg-1 offset-xl-1">
                                <div className="banner_text text-center text-md-left">
                                    <h4>Today’s Jackpot</h4>
                                    <h1>777</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                    <div class="text-center">
                                        <a href="#">Play Now</a>
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

export default Banner;
