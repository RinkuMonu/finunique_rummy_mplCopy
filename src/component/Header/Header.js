import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { TbHelpSquareFilled } from "react-icons/tb";
import { FaLanguage, FaGamepad } from "react-icons/fa";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowDropdown(false);
  };

  return (
    <>
      <header id="top-header" className="fixed-top bg-white shadow-sm py-2">
        <div className="container d-flex align-items-center px-4">
          <nav
            className="d-flex align-items-center gap-5"
            style={{ marginLeft: "auto" }}
          >
            <div className="d-flex align-items-center">
              <Link
                to="/"
                className="d-flex align-items-center text-decoration-none"
              >
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

              <DropdownButton
                id="game-dropdown"
                title={<span className="fw-bold text-dark">{t('finuniqueGames')}</span>}
                variant="light"
                className="shadow-sm ms-3"
              >
                {gameList.map((game, index) => (
                  <Dropdown.Item key={index} className="text-dark">
                    {game}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
            <Link to="/about" className="text-decoration-none text-dark">
              {t('about')}
            </Link>
            <Link to="/blog" className="text-decoration-none text-dark">
              {t('blog')}
            </Link>
            <Link className="text-decoration-none text-dark">
              {t('faqs')}
            </Link>
          </nav>
          <div className="right-side d-flex gap-3" style={{ marginLeft: "auto" }}>
            <Link className="btn btn-outline-danger d-flex align-items-center">
              <TbHelpSquareFilled className="me-2" />
              {t('help')}
            </Link>

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
          </div>
        </div>
      </header>
    </>
  );
}
