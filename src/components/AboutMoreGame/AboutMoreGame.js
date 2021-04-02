import React, { Component } from 'react';
import About1 from '../../assets/images/about_1.jpg';
import About2 from '../../assets/images/about_2.jpg';
import About3 from '../../assets/images/about_3.jpg';
import './AboutMoreGame.css';

class AboutMoreGame extends Component {
    render() {
        return (
            <div>
                <section id="game_part" className="about_page_game">
                    <div className="container text-center p-md-0">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 mb-4">
                                <div className="game_head abt_game_head">
                                    <span>Related Games</span>
                                </div>
                            </div>
                        </div>
                        <div className="row about_game_slider">
                            <div className="col-lg-3">
                                <div className="game_img">
                                    <img src={About1} className="img-fluid w-100" alt="about_1" />
                                    <div className="game_overly">
                                        <h3>Casino Game</h3>
                                        <a href="#">Play Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="game_img">
                                    <img src={About2} className="img-fluid w-100" alt="about_2" />
                                    <div className="game_overly">
                                        <h3>Casino Game</h3>
                                        <a href="#">Play Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="game_img">
                                    <img src={About3} className="img-fluid w-100" alt="about_3" />
                                    <div className="game_overly">
                                        <h3>Casino Game</h3>
                                        <a href="#">Play Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="game_img">
                                    <img src={About1} className="img-fluid w-100" alt="about_2" />
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

export default AboutMoreGame;
