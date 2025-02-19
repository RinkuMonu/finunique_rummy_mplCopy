import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { TbHelpSquareFilled } from "react-icons/tb";
import { FaLanguage, FaGamepad } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownButton } from "react-bootstrap";

const gameList = ["Rummy", "Poker", "Pool"];

export default function Header() {
    const { t, i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name , setName] = useState("")
    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const userData = localStorage.getItem("user");

        if (token && userData) {
            const user = JSON.parse(userData);  // ✅ Parse user data
            setIsLoggedIn(true);
            setName(user.username || "User");  // ✅ Default name if not found
        } else {
            setIsLoggedIn(false);
            setName("");
        }
    }, []);

    // ✅ Logout function
    const handleLogout = () => {
        localStorage.removeItem("authToken"); // Remove Token
        localStorage.removeItem("user"); // Remove User Data
        setIsLoggedIn(false);
        navigate("/login"); // Redirect to login
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setShowDropdown(false);
    };

    return (
        <>
            <header id="top-header" className="fixed-top">
                <div className="container-fluid px-0">
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
                                <li className="nav-item ms-auto">
                                    <DropdownButton
                                        id="game-dropdown"
                                        title={<span className="fw-bold text-dark ms-auto">{t('finuniqueGames')}</span>}
                                        variant="light"
                                        className="ms-3"
                                    >
                                        {gameList.map((game, index) => (
                                            <Dropdown.Item key={index} className="text-dark">
                                                <FaGamepad size={24} className="text-dark me-2" />
                                                {game}
                                            </Dropdown.Item>
                                        ))}
                                    </DropdownButton>
                                </li>

                                <li className="nav-item">
                                    <Link to="/about" className="nav-link text-dark">{t('about')}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/faqs" className="nav-link text-dark">{t('faqs')} </Link>
                                </li>

                                {/* Right Side Section */}
                                <li className="nav-item d-flex gap-3">
                                    <Link className="d-flex align-items-center">
                                        <TbHelpSquareFilled className='me-2' />
                                        Help
                                    </Link>

                                    {/* Language Toggle Button */}
                                    <div className="position-relative">
                                        <button
                                            className="btn btn-light d-flex align-items-center border rounded px-3 py-2 cursor-pointer"
                                            onClick={() => setShowDropdown(!showDropdown)}
                                        >
                                            <FaLanguage className="me-2" />
                                            <span className="fw-medium">{t('language')}</span>
                                        </button>

                                        {showDropdown && (
                                            <div
                                                className="position-absolute bg-white p-3 rounded shadow"
                                                style={{ top: "100%", right: 0, zIndex: 1050 }}
                                            >
                                                {["en", "hi", "gu", "mr", "bn", "ta", "te", "kn"].map(
                                                    (lang, index) => (
                                                        <div className="form-check" key={index}>
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="language"
                                                                id={`lang-${lang}`}
                                                                onChange={() => changeLanguage(lang)}
                                                                checked={i18n.language === lang}
                                                            />
                                                            <label className="form-check-label" htmlFor={`lang-${lang}`}>
                                                                {lang.toUpperCase()}
                                                            </label>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </li>

                                {/* ✅ Login / Logout Button */}
                                <li className="ms-auto">
                                    {isLoggedIn ? (
                                        <>
                                        <div>Welcome,{name}</div>
                                        <button onClick={handleLogout} className="btn btn-danger">
                                            Logout
                                        </button>
                                        </>
                                    ) : (
                                        <Link to="/login" className="btn btn-primary">
                                            Login
                                        </Link>
                                    )}
                                </li>
                                {!isLoggedIn && (
                                    <li>
                                        <Link to="/register" className="btn btn-secondary">
                                            Register
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
