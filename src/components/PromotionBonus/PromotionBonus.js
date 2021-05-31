import React from 'react';
import './PromotionBonus.css';
import './PromotionBonusResponsive.css';

const PromotionBonus = () => {
    return (
        <div>
            <section id="prom_bonus_part">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 pr-md-0">
                            <div className="promo_bonus_text">
                                <h2>The Best Bonuses on the Internet!</h2>
                                <p>
                                    <span>Claiming your BONUS is easy:</span>
                                    <span>Just Download the software, or sign in through the Instant play...Redeem your Coupon Code at the cashier prior to making your deposit. A Bonus Coupon Code can be also redeemed after your deposit is complete, but only if it has not been played on any game. Coupon codes are valid only for deposits of $25 or more.</span>
                                    <span>Please read the terms and conditions for each bonus carefully. In addition, each of our bonuses and promotions are subject to Las Vegas USA Casino’s General Rules and Regulations</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PromotionBonus;
