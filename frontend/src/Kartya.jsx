import './Gomb.css'
const placeholder = "https://placehold.co/200x150";

function Kartya() {
  return (
    <div className="kartya">
      <img className="kartya-kep" src={placeholder} alt="ilyen torta" />
      <h2 className="kartya-cim">- torta</h2>
      <p className="kartya-szoveg">Ez egy ilyen torta.</p>
      <button className='gomb_style'>Kosárba</button>
    </div>
  );
}

export default Kartya
