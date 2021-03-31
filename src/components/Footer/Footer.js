import React, { Component } from 'react';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faFacebookF,  faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import Footer1 from '../../assets/images/foot_icon1.png';
import Footer2 from '../../assets/images/foot_icon2.png';
import FooterShape from '../../assets/images/shape.png';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer_part">
                    <div className="container px-lg-0">
                        <div className="row">
                            <div className="col-lg-4 col-12 pl-md-0">
                                <div className="foot_about">
                                    <h3>About Jackpot</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco .</p>
                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faPinterestP} /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 jhamela">
                                <div className="foot_info_head">
                                    <h3>Important Links</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="foot_info_text">
                                            <ul>
                                                <li><a href="#">Live Score</a></li>
                                                <li><a href="#">How to Play</a></li>
                                                <li><a href="#">Tournaments</a></li>
                                                <li><a href="#">Registration Bonus</a></li>
                                                <li><a href="#">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="foot_info_text">
                                            <ul>
                                                <li><a href="#">Help Desk</a></li>
                                                <li><a href="#">FAQ</a></li>
                                                <li><a href="#">Support</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 pr-md-0">
                                <div className="foot_secu">
                                    <h3>Security Info</h3>
                                    <div className="foot_secu_text">
                                        <div className="">
                                            <img src={Footer1} alt="foot_icon1" />
                                        </div>
                                        <div className="">
                                            <p>Safe &amp; Secure <span>Banking</span></p>
                                        </div>
                                    </div>
                                    <div class="foot_secu_text">
                                        <div className="">
                                            <img src={Footer2} alt="foot_icon2" />
                                        </div>
                                        <div className="">
                                            <p>Total 203 Million <span>Registered Users</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <section>
                    <div class="foot_bot text-center">
                        <p>© 2021. All rights reserved by Designer</p>
                        <div class="effect">
                            <img src={FooterShape} alt="shape" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;
