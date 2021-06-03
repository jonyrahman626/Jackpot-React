import React from 'react';
import about1 from '../../assets/images/about_1.jpg';
import about2 from '../../assets/images/about_2.jpg';
import about3 from '../../assets/images/about_3.jpg';
import game4 from '../../assets/images/03_Games4.jpg';
import game5 from '../../assets/images/03_Games5.jpg';
import game6 from '../../assets/images/03_Games6.jpg';
import game7 from '../../assets/images/03_Games7.jpg';
import game8 from '../../assets/images/03_Games8.jpg';
import game9 from '../../assets/images/03_Games9.jpg';
import './GameDetail.css';
import './GameDetailResponsive.css';

const GameDetail = () =>{
    return (
        <div>
            <section id="claim_part" className="client_bg client_bg2">
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
                    <div className="row main_game">
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img2 game_margin game_margin2">
                                <img src={about1} className="img-fluid w-100" alt="about_1" />
                                <div className="game_overly">
                                    <h3>Casino Game</h3>
                                    <a href="#">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img2 game_margin game_margin2">
                                <img src={about2} className="img-fluid w-100" alt="about_2" />
                                <div className="game_overly">
                                    <h3>Casino Game</h3>
                                    <a href="#">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img2 game_margin2">
                                <img src={about3} className="img-fluid w-100" alt="about_3" />
                                <div className="game_overly">
                                    <h3>Casino Game</h3>
                                    <a href="#">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img_pad game_margin2">
                                <img src={game4} className="img-fluid w-100" alt="03_Games4" />
                                <div className="game_overly">
                                    <h3>Casino Game</h3>
                                    <a href="#">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img_pad game_margin2">
                                <img src={game5} className="img-fluid w-100" alt="03_Games5" />
                                <div className="game_overly">
                                    <h3>Casino Game</h3>
                                    <a href="#">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img_pad game_margin2">
                                <img src={game6} className="img-fluid w-100" alt="03_Games6" />
                                <div className="game_overly">
                                    <h3>Casino Game</h3>
                                    <a href="#">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img_pad game_margin2">
                                <img src={game7} className="img-fluid w-100" alt="03_Games7" />
                                <div className="game_overly">
                                    <h3>Casino Game</h3>
                                    <a href="#">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img_pad game_margin2">
                                <img src={game8} className="img-fluid w-100" alt="03_Games8" />
                                <div className="game_overly">
                                    <h3>Casino Game</h3>
                                    <a href="#">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img_pad">
                                <img src={game9} className="img-fluid w-100" alt="03_Games9" />
                                <div className="game_overly">
                                    <h3>Casino Game</h3>
                                    <a href="#">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 d-none d-sm-block d-md-none">
                            <div className="game_img">
                                <img src={about1} className="img-fluid w-100" alt="about_3" />
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

export default GameDetail;
