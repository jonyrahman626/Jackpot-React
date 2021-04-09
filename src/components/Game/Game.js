import React, { Component } from 'react';
import About1 from '../../assets/images/about_1.jpg';
import About2 from '../../assets/images/about_2.jpg';
import About3 from '../../assets/images/about_3.jpg';
import './Game.css';
import './GameResponsive.css';

class Game extends Component {
    render() {
        return (
            <div>
                <section id="game_part">
                    <div className="container px-lg-0 text-center">
                        <div className="row flow_sha d-none d-md-block">
                            <div className="col-lg-12">
                                <div className="game_flow">
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
                        {/* For Mobile Device start */}
                        {/* <div class="row flow_sha d-md-none">
                            <div class="col-lg-12">
                                <div class="game_flow">
                                    <div class="row flow_slider">
                                        <div class="col-lg-12 border_shadow">
                                            <div class="game_text">
                                                <h2><span>0</span><span>1</span></h2>
                                                <h3>Register</h3>
                                                <p>Download the app and signup for account</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 border_shadow">
                                            <div class="game_text">
                                                <h2>02</h2>
                                                <h3>Get Ready</h3>
                                                <p>Deposit &amp; get ready for play betting</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 border_shadow">
                                            <div class="game_text">
                                                <h2>03</h2>
                                                <h3>Enjoy</h3>
                                                <p>Betting more and more &amp; enjoy game</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 border_shadow">
                                            <div class="game_text">
                                                <h2><span>0</span><span>1</span></h2>
                                                <h3>Register</h3>
                                                <p>Download the app and signup for account</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 border_shadow">
                                            <div class="game_text">
                                                <h2>02</h2>
                                                <h3>Get Ready</h3>
                                                <p>Deposit &amp; get ready for play betting</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 border_shadow">
                                            <div class="game_text">
                                                <h2>03</h2>
                                                <h3>Enjoy</h3>
                                                <p>Betting more and more &amp; enjoy game</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* For Mobile Device end */}
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="game_head">
                                    <h2>Related Games</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="game_img">
                                    <img src={About1} className="img-fluid w-100" alt="about_1" />
                                    <div className="game_overly">
                                        <h3>Casino Game</h3>
                                        <a href="#">Play Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="game_img">
                                    <img src={About2} className="img-fluid w-100" alt="about_2" />
                                    <div className="game_overly">
                                        <h3>Casino Game</h3>
                                        <a href="#">Play Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="game_img">
                                    <img src={About3} className="img-fluid w-100" alt="about_3" />
                                    <div className="game_overly">
                                        <h3>Casino Game</h3>
                                        <a href="#">Play Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-md-none col-sm-6 col-md-4">
                                <div className="game_img">
                                    <img src={About1} className="img-fluid w-100" alt="about_3" />
                                    <div className="game_overly">
                                        <h3>Casino Game</h3>
                                        <a href="#">Play Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Game;
