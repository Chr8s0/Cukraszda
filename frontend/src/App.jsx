import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Kartya from "./Kartya.jsx";
import UjTorta from "./UjTorta.jsx";
import Kosar from "./Kosar.jsx";
import "./App.css";
import csoki from './img/csoki.jpeg'
import eper from './img/eper.jpeg'
import vanilia from './img/vanilia.jpeg'


const products = [
  { id: 1, name: "Csokitorta", price: 4500, img: csoki },
  { id: 2, name: "Epertorta", price: 5200, img: eper },
  { id: 3, name: "Vaníliatorta", price: 4800, img: vanilia },
];

function Fooldal({ addToCart }) {
  return (
    <>
      <Header />

      <div className="kartya-container" id="tortak">
        {products.map((p) => (
          <Kartya key={p.id} {...p} addToCart={addToCart} />
        ))}
      </div>

      <UjTorta />
      <Footer />
    </>
  );
}

function App() {
  const [items, setItems] = useState([]);

  // ➕ kosárba rakás
  function addToCart(product) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);

      if (existing) {
        return prev.map((i) =>
          i.id === product.id
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }

      return [...prev, product];
    });
  }

  return (
    <Routes>
      <Route path="/" element={<Fooldal addToCart={addToCart} />} />
      <Route path="/kosar" element={<Kosar items={items} setItems={setItems} />} />
    </Routes>
  );
}

export default App;