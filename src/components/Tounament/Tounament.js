import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Shape from '../../assets/images/shape.png';
import Scroll1 from '../../assets/images/scroll1.png';
import Scroll2 from '../../assets/images/scroll2.png';
import Scroll3 from '../../assets/images/scroll3.png';
import Scroll4 from '../../assets/images/scroll4.png';
import Scroll5 from '../../assets/images/scroll5.png';
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
                                            <img src={Shape} alt="shape" />
                                        </div>
                                    </h3>

                                    <Accordion defaultActiveKey="0" className="touna_left_inner">
                                        <Card className="add_border">
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                    <span>01. How can play these games (for begineer)?</span>
                                                    <i><FontAwesomeIcon icon={faCaretDown} /></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                    <span>02. If I play games and lost by any chance, How I’ll pay?</span>
                                                    <i><FontAwesomeIcon icon={faCaretDown} /></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                                    <span>03. What are the benefits for gambiling?</span>
                                                    <i><FontAwesomeIcon icon={faCaretDown} /></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                                    <span>04. What are the benefits for gambiling?</span>
                                                    <i><FontAwesomeIcon icon={faCaretDown} /></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </div>
                            <div className="col-lg-5 pr-md-0 jhamela">
                                <div className="touna_head_left">
                                    <h3>Today’s Tournaments
                                        <div className="effect3">
                                            <img src={Shape} alt="shape" />
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
                                <div className="tun_scroll" style={{overflowY: "scroll"}} tabindex="1">
                                    <div className="row scl_pad">
                                        <div className="col-lg-5 col-5">
                                            <div className="toun_scroll_name tun_border">
                                                <h5>01. Rozina Khan</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-2 text-center">
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll1} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll2} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll3} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll4} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll5} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll1} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll2} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll3} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll4} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll5} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll1} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll2} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll3} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll4} alt="scroll1" /></div>
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
                                            <div className="toun_scroll_flag tun_border"><img src={Scroll5} alt="scroll1" /></div>
                                        </div>
                                        <div className="col-lg-5 col-5 text-right">
                                            <div className="toun_scroll_name tun_border">
                                                <p>$365.25</p>
                                            </div>
                                        </div>
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

export default Tounament;
