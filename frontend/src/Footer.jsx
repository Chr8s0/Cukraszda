import insta from "./img/insta.png";
{/*import gmail from "./img/gmail.jfif";*/}
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} HeniCake</p>
      <div id="social-div">
        <a target="_blank" href="https://www.instagram.com/mentes_tortak/">
          <p>
            <img className="social-link" src={insta} alt="" />
            Instagram
          </p>
        </a>
        {/*
        <a target="blank" href="henriettbenczur@gmail.com">
          <p>
            <img className="social-link" src={gmail} alt="" />
            Gmail
          </p>
        </a>
        */}
      </div>
    </footer>
  );
}

export default Footer;
