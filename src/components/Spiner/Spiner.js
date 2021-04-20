import React, { Component } from 'react';
import Spiner1 from '../../assets/images/claim_part.png';
import './Spiner.css';
import './SpinerResponsive.css';

class Spiner extends Component {
    render() {
        return (
            <div>
                <section id="spiner_part">
                    <div className="container px-lg-0">
                        <div className="row">
                            <div className="col-sm-5 col-md-5">
                                <div className="claim_img">
                                    <img src={Spiner1} className="img-fluid" alt="claim_part" />
                                </div>
                            </div>
                            <div class="col-sm-7 col-12 col-md-7 col-lg-6 pr-md-0 offset-lg-1">
                                <div class="claim_text">
                                    <h2>Unlock Free Spin</h2>
                                    <p class="d-sm-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. <span>Excepteur sint occaecat cupidatat non proident, sunt inrunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</span></p>
                                    <p class="d-none d-sm-block d-md-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span>Excepteur sint occaecat cupidatat non proident, sunt inrunt mollit anim id est laborum.</span></p>
                                    <div class="clm_btn">
                                        <a href="#">Claim Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Spiner;