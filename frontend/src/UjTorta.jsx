import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import placeholder from "./img/torta_placeholder.jpg";
import "./UjTorta.css";

function UjTorta() {
  const [open, setOpen] = useState(false);
  const [torta, setTorta] = useState("");

  // ✅ EMAILJS INIT (EZ VOLT HIÁNYZÓ)
  useEffect(() => {
    emailjs.init("uze5iXxhkqSdKlvSd");
  }, []);

  const sendEmail = () => {
    console.log("CLICK FIRED");

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
        setOpen(false);
        setTorta("");
      })
      .catch((error) => {
        console.error("EMAILJS HIBA:", error);
        alert("Hiba történt a küldés során!");
      });
  };

  return (
    <>
      <div className="uj-kartya">
        <img className="kartya-kep" src={placeholder} alt="" />
        <h2 className="uj-kartya-cim">A TE tortád</h2>
        <p className="kartya-szoveg">
          Rendelj tortát saját ízlésed szerint!😉
        </p>

        <button className="gomb_style" onClick={() => setOpen(true)}>
          Saját Torta!
        </button>
      </div>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal kartya" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ×
            </button>

            <h2 className="kartya-cim">🍰 Add meg a tortád</h2>

            <textarea
              className="modal-input"
              placeholder="pl. csokitorta"
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

export default UjTorta;