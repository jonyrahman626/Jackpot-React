import React, { Component } from 'react';
import About1 from '../../assets/images/about_1.jpg';
import About2 from '../../assets/images/about_2.jpg';
import About3 from '../../assets/images/about_3.jpg';
import Slider from "react-slick";
import './AboutMoreGame.css';
import './AboutMoreGameResponsive.css';

class AboutMoreGame extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:false,
            autoplay: true,
            responsive: [
                {
                  breakpoint: 993,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        };
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
                        <Slider {...settings} className="row about_game_slider">
                            <div className="col-lg-12">
                                <div className="game_img">
                                    <img src={About1} className="img-fluid w-100" alt="about_1" />
                                    <div className="game_overly">
                                        <h3>Casino Game</h3>
                                        <a href="#">Play Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="game_img">
                                    <img src={About2} className="img-fluid w-100" alt="about_2" />
                                    <div className="game_overly">
                                        <h3>Casino Game</h3>
                                        <a href="#">Play Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="game_img">
                                    <img src={About3} className="img-fluid w-100" alt="about_3" />
                                    <div className="game_overly">
                                        <h3>Casino Game</h3>
                                        <a href="#">Play Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="game_img">
                                    <img src={About1} className="img-fluid w-100" alt="about_2" />
                                    <div className="game_overly">
                                        <h3>Casino Game</h3>
                                        <a href="#">Play Now</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </section>      
            </div>
        );
    }
}

export default AboutMoreGame;
