import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-content pt-5 pb-5 mb-3">
                        <div className="row">
                            <div className="col-xl-5 col-lg-4  mb-30 ps-md-5 mt-sm-5 mt-xs-5">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link to={"/"}>Home</Link></li>
                                        <li><Link to='/about'>About</Link></li>
                                        {/* <li><Link to='/'>Blog</Link></li> */}
                                        <li><Link to='/terms'>Terms and Conditions</Link></li>
                                        <li><Link to='/privacy'>Privacy Policy</Link></li>
                                        <li><Link to='/cancel'>
                                            Returns, Refunds & Cancellation</Link></li>
                                        <li><Link to='/contact'>Contact & Support</Link></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-4 col-md-6 mb-30 ps-md-5 mt-sm-5 mt-xs-5">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Popular Card Games</h3>
                                    </div>
                                    <ul>
                                        <li><Link to='/rummy'>Rummy</Link></li>
                                        <li><Link to='/poker'>Poker</Link></li>
                                        <li><Link to='/pool'>Pool</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="secondary-footer border-top mx-3 pt-3"><div class="container"><div class="copyright"><div class="row align-items-center"><div class="col-md-12 text-center">© 2025 @Finunique Small Private Limited. All rights reserved.</div></div></div></div></div>
                    </div>
                </div>
            </footer>

        </>
    )
}
