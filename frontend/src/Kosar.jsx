import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Kosar.css";

function Kosar({ items, setItems }) {
  useEffect(() => {
    emailjs.init("uze5iXxhkqSdKlvSd");
  }, []);

  function increase(id) {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: (i.qty || 1) + 1 } : i
      )
    );
  }

  function decrease(id) {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id
            ? { ...i, qty: (i.qty || 1) - 1 }
            : i
        )
        .filter((i) => (i.qty || 1) > 0)
    );
  }

  function remove(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function updateNote(id, value) {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, note: value } : i
      )
    );
  }

  const total = items.reduce(
    (sum, i) => sum + i.price * (i.qty || 1),
    0
  );

  const sendCart = () => {
    if (!items.length) {
      alert("A kosár üres!");
      return;
    }

    // 👉 EMAILBE MENŐ SZÖVEG (MINDEN ADATTAL)
    const message = items
      .map((i) => {
        return `
🍰 Torta: ${i.name}
📦 Mennyiség: ${i.qty || 1}
💰 Ár: ${i.price * (i.qty || 1)} Ft
📝 Megjegyzés: ${i.note || "-"}
🖼️ Kép: ${i.img || "-"}
        `;
      })
      .join("\n-----------------\n");

    const templateParams = {
      message,
      total: total + " Ft",
      date: new Date().toLocaleString("hu-HU"),
    };

    emailjs
      .send(
        "torta_service",
        "template_6zxgr7o",
        templateParams,
        "uze5iXxhkqSdKlvSd"
      )
      .then(() => {
        alert("🍰 Rendelés elküldve!");
        setItems([]);
      })
      .catch((err) => {
        console.error("EmailJS hiba:", err);
        alert("Hiba történt a küldésnél!");
      });
  };

  return (
    <>
      <Header />

      <div className="kosar-container">
        <h1 className="kosar-title">Kosár</h1>

        {!items.length ? (
          <div className="empty">A kosár üres 😢</div>
        ) : (
          <>
            <div className="kosar-lista">
              {items.map((item) => (
                <div className="kosar-item" key={item.id}>
                  <div className="item-left">
                    <div className="item-img">
                      <img src={item.img} alt={item.name} />
                    </div>

                    <div className="item-info">
                      <div className="item-name">
                        {item.name}
                      </div>

                      <textarea
                        className="item-note"
                        placeholder="Megjegyzés..."
                        value={item.note || ""}
                        onChange={(e) =>
                          updateNote(item.id, e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="item-right">
                    <div className="item-controls">
                      <button onClick={() => decrease(item.id)}>
                        −
                      </button>
                      <span>{item.qty || 1}</span>
                      <button onClick={() => increase(item.id)}>
                        +
                      </button>
                    </div>

                    <div className="item-price">
                      {item.price * (item.qty || 1)} Ft
                    </div>

                    <button
                      className="delete"
                      onClick={() => remove(item.id)}
                    >
                      törlés
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="kosar-footer">
              <h2 className="kosar-total">
                Összesen: {total} Ft
              </h2>

              <button className="send-btn" onClick={sendCart}>
                🍰 Rendelés elküldése
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Kosar;