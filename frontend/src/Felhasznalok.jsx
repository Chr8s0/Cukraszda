import PropTypes from 'prop-types'

function Felhasznalo(props){
    return(
        <div className="felhasznalo">
            <p>Név: {props.nev}</p>
            <p>Kor: {props.kor}</p>
            <p>Regisztrált: {props.regisztralt ? "Igen" : "Nem"}</p>
        </div>
    )
}

Felhasznalo.propTypes = {
    nev: PropTypes.string,
    kor: PropTypes.number,
    regisztralt: PropTypes.bool
}
Felhasznalo.defaultProps ={
    nev: "Vendég",
    kor: 0,
    regisztralt: false
}
export default Felhasznalo