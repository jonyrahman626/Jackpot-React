import React, { Component } from 'react';
import promoShape from '../../assets/images/promo_shape1.png';
import './PromotionPlayer.css';

class PromotionPlayer extends Component {
    render() {
        return (
            <div>
                <section id="promo_player_part">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-12 col-md-12">
                                <div className="pro_player_offer">
                                    <div className="pro_offer_inner pro_offer1">
                                        <img src={promoShape} className="img-fluid w-100" alt="promo_shape1" />
                                        <div className="overly">
                                            <h4>Double Match up Monday</h4>
                                            <h3>200%</h3>
                                            <p>bonus</p>
                                        </div>
                                    </div>
                                    <div className="pro_offer_inner pro_offer2">
                                        <img src={promoShape}  className="img-fluid w-100" alt="promo_shape1" />
                                        <div className="overly">
                                            <h4>Tues &amp; Thursday: T-Bled</h4>
                                            <h3>150%</h3>
                                            <p>bonus</p>
                                        </div>
                                    </div>
                                    <div className="pro_offer_inner pro_offer3">
                                        <img src={promoShape}  className="img-fluid w-100" alt="promo_shape1" />
                                        <div className="overly">
                                            <h4>Wild Wednesday</h4>
                                            <h3>300%</h3>
                                            <p>bonus</p>
                                        </div>
                                    </div>
                                    <div className="pro_offer_inner pro_offer4">
                                        <img src={promoShape} className="img-fluid w-100" alt="promo_shape1" />
                                        <div className="overly">
                                            <h4>Triple Weekend Winner</h4>
                                            <h3>250%</h3>
                                            <p>bonus</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="pro_player_text">
                                    <h2>Existent Players Promotions:</h2>
                                    <p>From Monday to Sunday you can choose from one to all of our amazing promotions. <span>We offer one different for each day</span> <span>Redeem your coupon code at the cashier, Prior to making your deposit</span> <span>Contact our live chat for details</span> <span>All our bonuses are 5 stars!!!</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default PromotionPlayer;
