import "./Gomb.css";
import { useNavigate } from "react-router-dom";

const placeholder = "https://placehold.co/200x150";

function Kartya({ addToCart, id, name, price, img }) {
  const navigate = useNavigate();

  return (
    <div className="kartya">
      <img className="kartya-kep" src={img || placeholder} alt={name} />

      <h2 className="kartya-cim">{name}</h2>
      <p className="kartya-szoveg">Finom torta</p>

      <button
        className="gomb_style"
        onClick={() => {
          addToCart({
            id,
            name,
            price,
            qty: 1,
            img: img || placeholder,
            note: "",
          });
          navigate("/kosar");
        }}
      >
        Kosárba
      </button>
    </div>
  );
}

export default Kartya;
