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

            <header id="top-header" className="fixed-top py-2">
                <div className="container-fluid ">
                    <nav className="navbar navbar-expand-lg px-3">
                        <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none me-auto">
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

                        {/* Bootstrap Navbar Toggler */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarNav">
                            <ul className="navbar-nav d-flex align-items-center gap-3 w-100">
                                <li className="nav-item">
                                    <DropdownButton
                                        id="game-dropdown"
                                        title={<span className="fw-bold text-dark ms-auto">Finunique Games</span>}
                                        variant="light"
                                        className="ms-3"
                                    >
                                        <div className="bg-white p-2 rounded me-2">
                                            <FaGamepad size={24} className="text-dark" />
                                        </div>
                                        {gameList.map((game, index) => (
                                            <Dropdown.Item key={index} className="text-dark">
                                                {game}
                                            </Dropdown.Item>
                                        ))}
                                    </DropdownButton>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/about"} className="nav-link text-dark">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark">FAQs</Link>
                                </li>

                                {/* Right Side Section */}
                                <li className="nav-item d-flex gap-3">
                                    <Link className="btn btn-outline-danger d-flex align-items-center">
                                        <TbHelpSquareFilled className='me-2' />
                                        Help
                                    </Link>

                                    {/* Language Toggle Button */}
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
                                                {["English", "हिंदी", "ગુજરાતી", "मराठी", "বাংলা", "தமிழ்", "తెలుగు", "ಕನ್ನಡ"].map((lang, index) => (
                                                    <div className="form-check" key={index}>
                                                        <input className="form-check-input" type="radio" name="language" id={`lang-${index}`} />
                                                        <label className="form-check-label" htmlFor={`lang-${index}`}>{lang}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </li>
                                <li className='ms-auto'>
                                    <Link to={"/login"}>Login</Link>
                                </li>
                                <li className=''>
                                    <Link to={"/register"}>Register</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    )
}
