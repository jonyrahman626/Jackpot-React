import React, { Component } from 'react';
import './PricingDetail.css';

class PricingDetail extends Component {
    render() {
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
                        {/* <div className="row flow_sha text-center d-md-none">
                            <div className="col-lg-12">
                                <div className="game_flow about_flow">
                                    <div className="row flow_slider slick-initialized slick-slider"><div className="slick-list draggable"><div className="slick-track" style="opacity: 1; width: 0px; transform: translate3d(0px, 0px, 0px); transition: transform 500ms ease 0s;"><div className="slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2><span>0</span><span>1</span></h2>
                                                <h3>Register</h3>
                                                <p>Download the app and signup for account</p>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2>02</h2>
                                                <h3>Get Ready</h3>
                                                <p>Deposit &amp; get ready for play betting</p>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2>03</h2>
                                                <h3>Enjoy</h3>
                                                <p>Betting more and more &amp; enjoy game</p>
                                            </div>
                                        </div></div></div><div className="slick-slide" data-slick-index="0" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2><span>0</span><span>1</span></h2>
                                                <h3>Register</h3>
                                                <p>Download the app and signup for account</p>
                                            </div>
                                        </div></div></div><div className="slick-slide" data-slick-index="1" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2>02</h2>
                                                <h3>Get Ready</h3>
                                                <p>Deposit &amp; get ready for play betting</p>
                                            </div>
                                        </div></div></div><div className="slick-slide" data-slick-index="2" aria-hidden="true" style="width: 0px;"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2>03</h2>
                                                <h3>Enjoy</h3>
                                                <p>Betting more and more &amp; enjoy game</p>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-current slick-active" data-slick-index="3" aria-hidden="false" style="width: 0px;"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2><span>0</span><span>1</span></h2>
                                                <h3>Register</h3>
                                                <p>Download the app and signup for account</p>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-active" data-slick-index="4" aria-hidden="false" style="width: 0px;"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2>02</h2>
                                                <h3>Get Ready</h3>
                                                <p>Deposit &amp; get ready for play betting</p>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-active" data-slick-index="5" aria-hidden="false" style="width: 0px;" tabindex="-1"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2>03</h2>
                                                <h3>Enjoy</h3>
                                                <p>Betting more and more &amp; enjoy game</p>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2><span>0</span><span>1</span></h2>
                                                <h3>Register</h3>
                                                <p>Download the app and signup for account</p>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2>02</h2>
                                                <h3>Get Ready</h3>
                                                <p>Deposit &amp; get ready for play betting</p>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2>03</h2>
                                                <h3>Enjoy</h3>
                                                <p>Betting more and more &amp; enjoy game</p>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2><span>0</span><span>1</span></h2>
                                                <h3>Register</h3>
                                                <p>Download the app and signup for account</p>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2>02</h2>
                                                <h3>Get Ready</h3>
                                                <p>Deposit &amp; get ready for play betting</p>
                                            </div>
                                        </div></div></div><div className="slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" style="width: 0px;" tabindex="-1"><div><div className="col-lg-12 border_shadow" style="width: 100%; display: inline-block;">
                                            <div className="game_text">
                                                <h2>03</h2>
                                                <h3>Enjoy</h3>
                                                <p>Betting more and more &amp; enjoy game</p>
                                            </div>
                                        </div></div></div></div></div></div>
                                </div>
                            </div>
                        </div> */}
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
}

export default PricingDetail;
