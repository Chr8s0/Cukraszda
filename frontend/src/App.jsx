import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Kartya from "./Kartya.jsx";
import UjTorta from "./UjTorta.jsx";
import Kosar from "./Kosar.jsx";

import { Routes, Route } from "react-router-dom";

function Fooldal() {
  return (
    <>
      <Header />

      <div className="kartya-container">
        <Kartya />
        <Kartya />
        <Kartya />
        <Kartya />
        <Kartya />
        <Kartya />
      </div>

      <UjTorta />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Fooldal />} />
      <Route path="/kosar" element={<Kosar />} />
    </Routes>
  );
}

export default App;
