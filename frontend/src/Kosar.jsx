import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./Kosar.css";

function Kosar({ items, setItems }) {
  // ➕ mennyiség növelés
  function increase(id) {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: (i.qty || 1) + 1 } : i
      )
    );
  }

  // ➖ mennyiség csökkentés
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

  // ❌ törlés
  function remove(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  // ✍️ megjegyzés
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

  function sendCart() {
    if (!items || items.length === 0) {
      alert("A kosár üres!");
      return;
    }

    const message = items
      .map(
        (i) =>
          `${i.name} x${i.qty || 1} = ${
            i.price * (i.qty || 1)
          } Ft\nMegjegyzés: ${i.note || "-"}`
      )
      .join("\n\n");

    alert("🍰 Rendelés elküldve:\n\n" + message);

    setItems([]);
  }

  return (
    <>
      <Header />

      <div className="kosar-container">
        <h1>Kosár</h1>

        {(!items || items.length === 0) ? (
          <p>A kosár üres</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} className="kosar-item">
                <p>{item.name}</p>

                <button onClick={() => decrease(item.id)}>-</button>
                <span>{item.qty || 1}</span>
                <button onClick={() => increase(item.id)}>+</button>

                <textarea
                  placeholder="Megjegyzés..."
                  value={item.note || ""}
                  onChange={(e) =>
                    updateNote(item.id, e.target.value)
                  }
                />

                <button onClick={() => remove(item.id)}>
                  törlés
                </button>
              </div>
            ))}

            <h2>Összesen: {total} Ft</h2>

            <button onClick={sendCart}>
              Küldés
            </button>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Kosar;