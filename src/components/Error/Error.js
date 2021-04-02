import React, { Component } from 'react';
import ErrorBanner from '../../assets/images/08_404_Page.png'
import './Error.css';

class Error extends Component {
    render() {
        return (
            <div>
                <section id="claim_part" className="client_bg client_bg2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="error_page_main">
                                    <img src={ErrorBanner} className="img-fluid" alt="08_404_Page" />
                                    <div className="error_btn">
                                        <a href="/">Go Back to Home</a>
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

export default Error;
