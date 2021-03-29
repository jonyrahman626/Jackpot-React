import React, { Component } from 'react';
import './Game.css';

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
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="game_head">
                                    <h2>Related Games</h2>
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
