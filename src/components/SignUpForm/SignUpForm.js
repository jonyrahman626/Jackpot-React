import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './SignUpForm.css';

class SignUpForm extends Component {
    render() {
        return (
            <div>
                <section id="claim_part" className="client_bg client_bg2 sign_form_part">
                    <div className="container">
                        <div className="row flow_sha text-center d-none d-md-block">
                            <div className="col-lg-12">
                                <div className="game_flow about_game game_page about_flow2">
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
                        <div className="row signup_form_pad">
                            <div className="col-lg-7 offset-lg-5">
                                <div className="main_signup">
                                    <h4>Signup</h4>
                                    <p>Register quickly to get all other facilities</p>
                                    <form action="">
                                        <div className="signup_inner">
                                            <div className="row fast_input">
                                                <div className="col sign_input_inner">
                                                    <input type="text" placeholder="your full name" />
                                                    <FontAwesomeIcon icon={faUser} />
                                                </div>
                                                <div className="col sign_input_inner">
                                                    <input type="text" placeholder="user name" />
                                                    <FontAwesomeIcon icon={faUser} />
                                                </div>
                                            </div>
                                            <div className="sign_input_inner">
                                                <input type="email" placeholder="your e-mail here" />
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                            <div className="sign_input_inner">
                                                <input type="password" placeholder="your password here" />
                                                <FontAwesomeIcon icon={faLock} />
                                            </div>
                                            <button type="submit">Signup</button>
                                            <p>Do you have already an account? <a href="#">Sign in</a></p>
                                            <h6>
                                                <span>Or Register with</span>
                                                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                            </h6>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default SignUpForm;
