import React, { Component } from 'react';
import './Tounament.css';

class Tounament extends Component {
    render() {
        return (
            <div>
                <section id="tounament_part">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 pl-md-0">
                                <div className="touna_head_left">
                                    <h3>Frequently Ask Questions
                                        <div className="effect2">
                                            <img src="images/shape.png" alt="shape" />
                                        </div>
                                    </h3>

                                    <div className="accordion touna_left_inner" id="accordionExample">
                                        <div className="card add_border">
                                            <div className="card-header" id="headingOne">
                                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <span>01. How can play these games (for begineer)?</span>
                                                    <i className="fas fa-caret-down"></i>
                                                </button>
                                            </div>

                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <span>02. If I play games and lost by any chance, How I’ll pay?</span>
                                                    <i className="fas fa-caret-down"></i>
                                                </button>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <span>03. What are the benefits for gambiling?</span>
                                                    <i className="fas fa-caret-down"></i>
                                                </button>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingFour">
                                                <button className="btn btn-link collapsed " type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                    <span>04. What are the benefits for gambiling?</span>
                                                    <i className="fas fa-caret-down"></i>
                                                </button>
                                            </div>

                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-5 pr-md-0 jhamela">
                                <div className="touna_head_left">
                                    <h3>Today’s Tournaments
                                        <div className="effect3">
                                            <img src="images/shape.png" alt="shape" />
                                        </div>
                                    </h3>
                                </div>
                                <div className="row pad_today">
                                    <div className="col-lg-5">
                                        <div className="coun_text">
                                            <h4>Time Remaining:</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-12">
                                        <div className="coundown cou_mar">
                                            <span className="coun_down">05</span>
                                            <p>Hours</p>
                                        </div>
                                        <div className="coundown">
                                            <span className="coun_down2">45</span>
                                            <p>Mins</p>
                                        </div>
                                        <div className="coundown">
                                            <span className="coun_down3">39</span>
                                            <p>Secs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tun_scroll" style="overflow: hidden; outline: currentcolor none medium;" tabindex="1">
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>01. Rozina Khan</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll1.png" alt="scroll1" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>02. Gozina Hezzez</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll2.png" alt="scroll2" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>03. Redwan Rizaj</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll3.png" alt="scroll3" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>04. Redwan Rizaj</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll4.png" alt="scroll4" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>05. Omer Rinki</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll5.png" alt="scroll5" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>06. Aaron Jack</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll1.png" alt="scroll1" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>07. Jarvis Malcolm</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll2.png" alt="scroll2" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>08. Redwan Rizaj</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll3.png" alt="scroll3" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>09. Redwan Rizaj</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll4.png" alt="scroll4" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>10. Omer Rinki</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll5.png" alt="scroll5" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>11. Rozina Khan</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll1.png" alt="scroll1" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>12. Gozina Hezzez</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll2.png" alt="scroll2" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>13. Redwan Rizaj</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll3.png" alt="scroll3" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>14. Redwan Rizaj</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll4.png" alt="scroll4" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>15. Omer Rinki</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src="images/scroll5.png" alt="scroll5" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Tounament;
