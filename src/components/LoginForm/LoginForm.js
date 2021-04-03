import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './LoginForm.css';

class LoginForm extends Component {
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
                        <div className="row signup_form_pad log_form_pad">
                            <div className="col-lg-7 offset-lg-5">
                                <div className="main_signup login_main">
                                    <h4>Log in</h4>
                                    <p>Log in quickly to get all other facilities</p>
                                    <form action="">
                                        <div className="signup_inner log_inner">
                                            <div className="sign_input_inner">
                                                <input type="email" placeholder="your e-mail here" />
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                            <div className="sign_input_inner">
                                                <input type="password" placeholder="your password here" />
                                                <FontAwesomeIcon icon={faLock} />
                                            </div>
                                            <button type="submit">Log in</button>
                                            <a href="#">Forget password</a>
                                            <p className="log_acc_yet">Don’t you have any account yet? <a href="#">Sign in</a></p>
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

export default LoginForm;
