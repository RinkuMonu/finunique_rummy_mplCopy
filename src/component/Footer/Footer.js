import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-content pt-5 pb-5 mb-3">
                        {/* <div className="row">
                            <div className="col-xl-5 col-lg-4  mb-30 ps-md-5 mt-sm-5 mt-xs-5">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link to={"/"}>Home</Link></li>
                               
                                        <li><Link to='/terms'>Terms and Conditions</Link></li>
                                        <li><Link to='/privacy'>Privacy Policy</Link></li>
                                        <li><Link to='/cancel'>
                                            Returns, Refunds & Cancellation</Link></li>
                                        <li><Link to='/contact'>Contact & Support</Link></li>

                                    </ul>
                                </div>
                            </div>
                          
                        </div> */}
                        <div className="row">
                            {/* Connect With Us Section */}
                            <div className="col-lg-4 col-md-5 mt-6 mt-md-0">
                                <h5>Connect With Us</h5>
                                <ul className="media-icon list-unstyled" style={{ lineHeight: "34px" }}>
                                    <li className="d-flex">
                                        <img src="./images/world.png" width={20} style={{ height: "100%", marginRight: '10px' }} alt="location" className="flaticon-facebook-app-symbol img-fluid" />

                                        <p className="mb-0" style={{ color: "#fff" }}>
                                            Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur Rajasthan, India, 302017
                                        </p>
                                    </li>
                                    <li>
                                        <img src="./images/send-mail.png" width={20} style={{ height: "100%", marginRight: '10px' }} alt="location" className="flaticon-facebook-app-symbol img-fluid" />

                                        <a href="mailto:info@7unique.in">info@finuniquerummy.com</a>
                                    </li>
                                    <li>
                                        <img src="./images/phone-call.png" width={20} style={{ height: "100%", marginRight: '10px' }} alt="location" className="flaticon-facebook-app-symbol img-fluid" />

                                        <a href="tel:++91 72970 26119">+91 72970 26119</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Other Links Section */}
                            <div className="col-lg-4 col-md-8 mt-6 mt-lg-0">
                                <div className="row">
                                    {/* Privacy, Terms, Refund Links */}
                                    <div className="col-md-6 footer-menu">
                                        <h5>Useful Links</h5>
                                        <ul className="list-unstyled w-100">
                                            <li>
                                                <Link to={"/"}>Home</Link>
                                            </li>
                                            <li>
                                                <Link to={"/about"}>About</Link>
                                            </li>
                                            <li>
                                                <Link to={"/terms"}>Terms And Conditions</Link>
                                            </li>
                                            <li>
                                                <Link to={"/privacy"}>Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <Link to={"/cancel"}>Return, Refund & Cancellation</Link>
                                            </li>
                                            <li>
                                                <Link to={"/contact"}>Contact & Support</Link>
                                            </li>
                                            <li>
                                                <Link to={"/gamerules"}>Game Rules</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Section */}
                            <div className="col-lg-4 col-md-7 pe-lg-8">
                                <h5>Social Media</h5>
                                <ul className="list-inline ps-0 ms-0 footer-social">
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/profile.php?id=61572631787499">
                                            <i class="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/fin_unique_/">
                                            <i class="bi bi-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://x.com/home">
                                            <i class="bi bi-twitter-x"></i>
                                        </a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div class="secondary-footer border-top mx-3 pt-3"><div class="container"><div class="copyright"><div class="row align-items-center"><div class="col-md-12 text-center">© 2025 @Finunique Small Private Limited. All rights reserved.</div></div></div></div></div>
                    </div>
                </div>
            </footer>

        </>
    )
}
