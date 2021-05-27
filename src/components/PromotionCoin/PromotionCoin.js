import React, { Component } from 'react';
import './PromotionCoin.css';
import './PromotionCoinResponsive.css';

class PromotionCoin extends Component {
    render() {
        return (
            <div>
                <section id="promotion_banner" className="coin_page">
                    <div className="container px-lg-0">
                        <div className="row flow_sha text-center d-none d-md-block">
                            <div className="col-lg-12">
                                <div className="game_flow about_game promo_flow">
                                    <div className="row m-0">
                                        <div className="col-md-4 border_shadow">
                                            <div className="game_text">
                                                <h2><span>0</span><span>1</span></h2>
                                                <h3>Register</h3>
                                                <p>Download the app and signup for account</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 border_shadow">
                                            <div className="game_text">
                                                <h2>02</h2>
                                                <h3>Get Ready</h3>
                                                <p>Deposit &amp; get ready for play betting</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 border_shadow">
                                            <div className="game_text">
                                                <h2>03</h2>
                                                <h3>Enjoy</h3>
                                                <p>Betting more and more &amp; enjoy game</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pro_banner">
                        <div className="row m-0">
                            <div className="col-lg-2 col-md-3 col-12 offset-lg-3 offset-md-2 p-md-0">
                                <div className="prom_banner_left">
                                    <h3>Wild Luck</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 pl-md-0 offset-md-2">
                                <div className="promo_banner_text">
                                    <h1>1000</h1>
                                    <h2>Welcome Coins<span>Gift Card</span></h2>
                                    <a href="#">Play for Free</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default PromotionCoin;
