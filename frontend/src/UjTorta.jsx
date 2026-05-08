import placeholder from "./img/torta_placeholder.jpg";
import './Gomb.css'

function UjTorta() {
  return (
    <div className="uj-kartya">
      <img className="kartya-kep" src={placeholder} alt="" />
      <h2 className="uj-kartya-cim">A TE tortád</h2>
      <p className="kartya-szoveg">Rendelj tortát saját ízlésed szerint!😉</p>
      <button className="gomb_style">Saját Torta!</button>
    </div>
  );
}

export default UjTorta;
