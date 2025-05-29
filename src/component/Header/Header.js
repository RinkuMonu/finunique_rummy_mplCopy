import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { TbHelpSquareFilled } from "react-icons/tb";
import { FaLanguage, FaGamepad } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownButton } from "react-bootstrap";

const gameList = [
  { name: "Rummy", path: "/rummy" },
//   { name: "Poker", path: "/poker" },
  { name: "Pool", path: "/pool" },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      const user = JSON.parse(userData);
      setIsLoggedIn(true);
      setName(user.username || "User");
    } else {
      setIsLoggedIn(false);
      setName("");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowDropdown(false);
  };

  return (
    <>
      <header id="top-header" className="fixed-top bg-white shadow">
        <div className="container-fluid px-3">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img
                alt="Finunique-logo"
                loading="lazy"
                width="50"
                height="32"
                className="img-fluid"
                src="./images/logo.png"
              />
            </Link>

            {/* Navbar Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto gap-3">
                {/* Games Dropdown */}
                <li className="nav-item dropdown">
                  <DropdownButton
                    id="game-dropdown"
                    title={
                      <span className="fw-bold text-dark">{t("Games")}</span>
                    }
                    variant="light"
                  >
                    {gameList.map((game, index) => (
                      <Dropdown.Item
                        key={index}
                        as={Link}
                        to={game.path}
                        className="text-dark"
                      >
                        <FaGamepad size={20} className="me-2" />
                        {game.name}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </li>

                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    {t("About")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/faq" className="nav-link">
                    {t("FAQs")}
                  </Link>
                </li>

                {/* Right Side Icons */}
                <li className="nav-item d-flex gap-3 align-items-center">
                  <Link
                    to="/contact"
                    className="nav-link d-flex align-items-center"
                  >
                    <TbHelpSquareFilled className="me-2" />
                    Help
                  </Link>

                  {/* Language Selector */}
                  <div className="position-relative">
                    <button
                      className="btn btn-light border rounded px-3 py-2"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      <FaLanguage className="me-2" />
                      {t("Language")}
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
                              <label
                                className="form-check-label"
                                htmlFor={`lang-${lang}`}
                              >
                                {lang.toUpperCase()}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </li>

                {/* Login / Logout Button */}
                <li className="nav-item ms-lg-3">
                  {isLoggedIn ? (
                    <div className="d-flex align-items-center gap-2">
                      <span>Welcome, {name}</span>
                      <button onClick={handleLogout} className="btn btn-danger">
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex gap-2">
                      <Link to="/login" className="btn ">
                        Login
                      </Link>
                      <Link to="/register" className="btn ">
                        Register
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
