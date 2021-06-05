import React, { Component } from 'react';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ContactInfo.css';
import './ContactInfoResponsive.css';

const ContactInfo = () => {
    return (
        <div>
            <section id="contact_page">
                <div className="container">
                    <div className="row flow_sha text-center d-none d-md-block">
                        <div className="col-lg-12">
                            <div className="game_flow contact_game about_flow2">
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
                </div>
                <div className="container p-md-0">
                    <div className="row cont_mar">
                        <div className="col-md-4 col-12">
                            <div className="cont_address">
                                <div className="con_icon">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </div>
                                <div className="address_text">
                                    <h3>Location</h3>
                                    <p>1234, Parkstreet Avenue, <br /> Newyork, America.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="cont_address">
                                <div className="con_icon">
                                    <FontAwesomeIcon icon={faPhoneVolume} />
                                </div>
                                <div className="address_text">
                                    <h3>Phone</h3>
                                    <p>+880 1234 567 896 <br />
                                        +880 3201 564 897</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="cont_address">
                                <div className="con_icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className="address_text">
                                    <h3>Email</h3>
                                    <p>jackpot@gmail.com<br />
                                        gambling@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactInfo;
