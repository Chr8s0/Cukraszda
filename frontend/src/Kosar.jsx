import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";
import "./Kosar.css";
const placeholder = "https://placehold.co/200x150";

function Kosar() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Csokitorta",
      price: 4500,
      qty: 1,
      img: placeholder,
    },
    {
      id: 2,
      name: "Epertorta",
      price: 5200,
      qty: 2,
      img: placeholder,
    },
  ]);

  function increase(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  }

  function decrease(id) {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  }

  function remove(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <Header />

      <div className="kosar-container">
        <h1 className="kosar-title">Kosár</h1>

        {items.length === 0 ? (
          <p className="empty">A kosár üres</p>
        ) : (
          <>
            <div className="kosar-lista">
              {items.map((item) => (
                <div className="kosar-item" key={item.id}>
                  <div className="item-img">
                    <img src={item.img} alt={item.name} />
                  </div>

                  <div className="item-name">{item.name}</div>

                  <div className="item-controls">
                    <button onClick={() => decrease(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increase(item.id)}>+</button>
                  </div>

                  <div className="item-price">{item.price * item.qty} Ft</div>

                  <button className="delete" onClick={() => remove(item.id)}>
                    törlés
                  </button>
                </div>
              ))}
            </div>

            <div className="kosar-total">
              Összesen: <b>{total} Ft</b>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Kosar;
