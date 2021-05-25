import React, { Component } from 'react';
import './Pricing.css';
import './PricingResponsive.css';

class Pricing extends Component {
    render() {
        return (
            <div>
                <section id="pricing_part">
                    <div className="container px-lg-0 text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="pricing_head">
                                    <h2>Our Pricing Plan</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 price_main">
                                <div className="pricing_inner">
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
                                    <a href="#">Choose Now</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 price_main">
                                <div className="pricing_inner">
                                    <div className="pricing_inner_head">
                                        <h2>Featured</h2>
                                    </div>
                                    <h3>Standard Plan</h3>
                                    <h4>9.99</h4>
                                    <p>USD/Per Month</p>
                                    <ul>
                                        <li>Editable Game Timer</li>
                                        <li>Upto 10 Plyers at a Time</li>
                                        <li>Etitable Score Averaging</li>
                                        <li>Printable Result Page</li>
                                        <li>X</li>
                                        <li>X</li>
                                    </ul>
                                    <a href="#">Choose Now</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 price_main">
                                <div className="pricing_inner">
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
                                    <a href="#">Choose Now</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 price_main d-md-none">
                                <div className="pricing_inner">
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
                                    <a href="#">Choose Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Pricing;