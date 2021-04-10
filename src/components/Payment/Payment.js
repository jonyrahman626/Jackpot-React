import React, { Component } from 'react';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Paycard1 from '../../assets/images/paycard1.png';
import Paycard2 from '../../assets/images/paycard2.png';
import Paycard3 from '../../assets/images/paycard3.png';
import Paycard4 from '../../assets/images/paycard4.png';
import Paycard5 from '../../assets/images/paycard5.png';
import './Payment.css';
import './PaymentResponsive.css';

class Payment extends Component {
    render() {
        return (
            <div>
                <section id="payment_part">
                    <div className="container px-lg-0">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="subcrib">
                                    <h3>Subscribe for Offers</h3>
                                    <form action="#" className="pay_form">
                                        <input type="email" placeholder="Your e-mail here" />
                                        <button className="pay_butt" type="submit">
                                           <FontAwesomeIcon icon={faPaperPlane} />
                                           <i class="fas fa-paper-plane"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-12 pr-md-0 offset-lg-1">
                                <div className="pay_meth">
                                    <h3>Payment Method</h3>
                                    <a href="#"><img src={Paycard1} alt="paycard1" /></a>
                                    <a href="#"><img src={Paycard2} alt="paycard1" /></a>
                                    <a href="#"><img src={Paycard3} alt="paycard1" /></a>
                                    <a href="#"><img src={Paycard4} alt="paycard1" /></a>
                                    <a href="#"><img src={Paycard5} alt="paycard1" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Payment;
