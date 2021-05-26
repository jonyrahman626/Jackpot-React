import React, { Component } from 'react';
import AboutPageGame from '../../assets/images/about_page_game.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import './AboutGame.css';
import './AboutGameResponsive.css';

class AboutGame extends Component {
    render() {
        return (
            <div>
                <section className="client_bg">
                    <div className="container px-lg-0">
                        <div className="row flow_sha text-center d-none d-md-block">
                            <div className="col-lg-12">
                                <div className="game_flow about_game">
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
                        <div className="row abou_clie">
                            <div className="col-md-5 pl-md-0">
                                <div className="claim_img">
                                    <img src={AboutPageGame} className="img-fluid w-100" alt="claim_part" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-7 pr-md-0 offset-lg-1">
                                <div className="about_play">
                                    <p className="d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</span></p>
                                    <p className="d-lg-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</span></p>
                                    <a className="paly_1st" href="#">Play Now</a>
                                    <a className="play_but venobox vbox-item" data-autoplay="true" data-vbtype="video" href="https://youtu.be/h7TpEyHW3ck"><div className="gameplay"><FontAwesomeIcon icon={faPlay} /></div><span>Watch Demo</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutGame;
