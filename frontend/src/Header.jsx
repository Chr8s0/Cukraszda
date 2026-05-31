import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import avatar from "./img/avatar.png";
import logo from "./img/LOGO.jpg";
import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [torta, setTorta] = useState("");

  // ✅ EmailJS init
  useEffect(() => {
    emailjs.init("uze5iXxhkqSdKlvSd");
  }, []);

  const sendEmail = () => {
    if (!torta.trim()) {
      alert("Írd be milyen tortát szeretnél!");
      return;
    }

    const templateParams = {
      message: torta,
    };

    emailjs
      .send(
        "torta_service",
        "template_6zxgr7o",
        templateParams,
        "uze5iXxhkqSdKlvSd"
      )
      .then((res) => {
        console.log("EMAIL OK:", res);
        alert("🍰 Rendelés elküldve!");
        setOpenOrder(false);
        setTorta("");
      })
      .catch((err) => {
        console.error("EMAILJS ERROR:", err);
        alert("Hiba történt a küldés során!");
      });
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <a href="/">
            <img className="logo" src={logo} alt="" />
          </a>
        </div>

        <div className="header-right">
          <ul className="nav-list">
            <li onClick={() => (window.location.href = "/")}>Főoldal</li>

            <li>
              <a href="#tortak">Torták</a>
            </li>

            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenOrder(true);
                }}
              >
                Rendelés
              </a>
            </li>

            <li onClick={() => (window.location.href = "/kosar")}>
              Kosár
            </li>

            <li onClick={() => (window.location.href = "/footer")}>
              Kapcsolat
            </li>
          </ul>

          <div className="avatar-container">
            <img
              className="avatar"
              src={avatar}
              alt="user avatar"
              onClick={() => setShowMenu(!showMenu)}
            />

            {showMenu && (
              <div className="dropdown-menu">
                <button onClick={() => (window.location.href = "/belepes")}>
                  Belépés
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 🌑 MODAL */}
      {openOrder && (
        <div className="modal-overlay" onClick={() => setOpenOrder(false)}>
          <div className="modal kartya" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setOpenOrder(false)}
            >
              ×
            </button>

            <h2 className="kartya-cim">🍰 Rendelés</h2>

            <input
              className="modal-input"
              type="text"
              placeholder="Milyen tortát szeretnél?"
              value={torta}
              onChange={(e) => setTorta(e.target.value)}
            />

            <button className="gomb_style" onClick={sendEmail}>
              Küldés
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;