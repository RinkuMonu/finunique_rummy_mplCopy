import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css';
import { TbHelpSquareFilled } from "react-icons/tb";
import { FaLanguage } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

import { Dropdown, DropdownButton } from "react-bootstrap";
const gameList = [
    "Rummy",
    "Poker",
    "Call Break",
    "Win Patti",
    "Gin Rummy",
    "Draw4",
    "Spades",
    "Solitaire",
];
export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <>

            <header id="top-header" className="fixed-top bg-white shadow-sm py-2">
                <div className="container d-flex align-items-center px-4">
                    <nav className="d-flex align-items-center gap-5" style={{ marginLeft: "auto" }} >
                        <div className="d-flex align-items-center">
                            <Link to="/" className="d-flex align-items-center text-decoration-none">
                                <img
                                    alt="Finunique-logo"
                                    loading="lazy"
                                    width="50"
                                    height="32"
                                    decoding="async"
                                    className="img-fluid"
                                    src="./images/logo.png"
                                />
                            </Link>
                            <div className="d-flex align-items-center">
                            
                                <DropdownButton
                                    id="game-dropdown"
                                    title={<span className="fw-bold text-dark">Finunique Games</span>}
                                    variant="light"
                                    className="shadow-sm ms-3"
                                >
                                        <div className="bg-light p-2 rounded me-2">
                                    <FaGamepad size={24} className="text-dark" />
                                </div>
                                    {gameList.map((game, index) => (
                                        <Dropdown.Item key={index} className="text-dark">
                                            {game}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </div>
                        </div>
                        <Link to={"/about"} className="text-decoration-none text-dark">About</Link>
                        <Link to={"/blog"} className="text-decoration-none text-dark">Blog</Link>
                        <Link className="text-decoration-none text-dark">FAQs</Link>

                    </nav>
                    <div className='right-side d-flex gap-3' style={{ marginLeft: "auto" }} >
                        <Link className="btn btn-outline-danger d-flex align-items-center">
                            <TbHelpSquareFilled className='me-2' />
                            Help
                        </Link>
                        {/* Language Toggle Button with Dropdown */}
                        <div className="position-relative">
                            <button
                                id="toggle-icon"
                                className="btn LanguageBtn btn-light d-flex align-items-center border rounded px-3 py-2 cursor-pointer"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                <FaLanguage className='me-2' />
                                <span id="lang--text" className="fw-medium">Language</span>
                            </button>
                            {showDropdown && (
                                <div className="position-absolute bg-dark text-white p-3 rounded shadow" style={{ top: "100%", right: 0, zIndex: 1050 }}>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="language" id="lang-en" defaultChecked />
                                        <label className="form-check-label" htmlFor="lang-en">English</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="language" id="lang-hi" />
                                        <label className="form-check-label" htmlFor="lang-hi">हिंदी</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="language" id="lang-gu" />
                                        <label className="form-check-label" htmlFor="lang-gu">ગુજરાતી</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="language" id="lang-mr" />
                                        <label className="form-check-label" htmlFor="lang-mr">मराठी</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="language" id="lang-bn" />
                                        <label className="form-check-label" htmlFor="lang-bn">বাংলা</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="language" id="lang-ta" />
                                        <label className="form-check-label" htmlFor="lang-ta">தமிழ்</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="language" id="lang-te" />
                                        <label className="form-check-label" htmlFor="lang-te">తెలుగు</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="language" id="lang-kn" />
                                        <label className="form-check-label" htmlFor="lang-kn">ಕನ್ನಡ</label>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}
