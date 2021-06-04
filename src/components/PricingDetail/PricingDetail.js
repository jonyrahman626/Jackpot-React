import React, { Component } from 'react';
import './PricingDetail.css';
import './PricingDetailResponsive.css';

const PricingDetail = () => {
    return (
        <div>
            <section id="pricing_page">
                <div className="container text-center">
                    <div className="row flow_sha text-center d-none d-md-block">
                        <div className="col-lg-12">
                            <div className="game_flow pricing_game about_flow2">
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
                    <div className="row pri_page pri_page_tow">
                        <div className="col-lg-4 col-sm-6 pri_page_in  price_main">
                            <div className="pricing_inner pri_page_inner">
                                <div className="pricing_inner_head">
                                    <h2>Featured</h2>
                                </div>
                                <h3>Trial Plan</h3>
                                <h4>0.00</h4>
                                <p>USD/Per Month</p>
                                <ul>
                                    <li>Editable Game Timer</li>
                                    <li>Upto 10 Plyers at a Time</li>
                                    <li>Etitable Score Averaging</li>
                                    <li>Printable Result Page</li>
                                    <li>X</li>
                                    <li>X</li>
                                </ul>
                                <a href="">Choose Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 pri_page_in price_main">
                            <div className="pricing_inner pri_page_inner">
                                <div className="pricing_inner_head">
                                    <h2>Featured</h2>
                                </div>
                                <h3>Standard Plan</h3>
                                <h4>0.00</h4>
                                <p>USD/Per Month</p>
                                <ul>
                                    <li>Editable Game Timer</li>
                                    <li>Upto 10 Plyers at a Time</li>
                                    <li>Etitable Score Averaging</li>
                                    <li>Printable Result Page</li>
                                    <li>X</li>
                                    <li>X</li>
                                </ul>
                                <a href="">Choose Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 pri_page_in price_main">
                            <div className="pricing_inner pri_page_inner">
                                <div className="pricing_inner_head">
                                    <h2>Featured</h2>
                                </div>
                                <h3>Platinum Plan</h3>
                                <h4>99.99</h4>
                                <p>USD/Per Month</p>
                                <ul>
                                    <li>Editable Game Timer</li>
                                    <li>Upto 10 Plyers at a Time</li>
                                    <li>Etitable Score Averaging</li>
                                    <li>Printable Result Page</li>
                                    <li>X</li>
                                    <li>X</li>
                                </ul>
                                <a href="">Choose Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 pri_page_in price_main">
                            <div className="pricing_inner pri_page_inner">
                                <div className="pricing_inner_head">
                                    <h2>Featured</h2>
                                </div>
                                <h3>Prepaid Plan</h3>
                                <h4>19.99</h4>
                                <p>USD/Per Month</p>
                                <ul>
                                    <li>Editable Game Timer</li>
                                    <li>Upto 10 Plyers at a Time</li>
                                    <li>Etitable Score Averaging</li>
                                    <li>Printable Result Page</li>
                                    <li>X</li>
                                    <li>X</li>
                                </ul>
                                <a href="">Choose Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 pri_page_in price_main">
                            <div className="pricing_inner pri_page_inner">
                                <div className="pricing_inner_head">
                                    <h2>Featured</h2>
                                </div>
                                <h3>Postpaid Plan</h3>
                                <h4>29.99</h4>
                                <p>USD/Per Month</p>
                                <ul>
                                    <li>Editable Game Timer</li>
                                    <li>Upto 10 Plyers at a Time</li>
                                    <li>Etitable Score Averaging</li>
                                    <li>Printable Result Page</li>
                                    <li>X</li>
                                    <li>X</li>
                                </ul>
                                <a href="">Choose Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 pri_page_in price_main">
                            <div className="pricing_inner pri_page_inner">
                                <div className="pricing_inner_head">
                                    <h2>Featured</h2>
                                </div>
                                <h3>Advanced Plan</h3>
                                <h4>39.99</h4>
                                <p>USD/Per Month</p>
                                <ul>
                                    <li>Editable Game Timer</li>
                                    <li>Upto 10 Plyers at a Time</li>
                                    <li>Etitable Score Averaging</li>
                                    <li>Printable Result Page</li>
                                    <li>X</li>
                                    <li>X</li>
                                </ul>
                                <a href="">Choose Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PricingDetail;
