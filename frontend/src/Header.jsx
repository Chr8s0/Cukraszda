import avatar from "./img/avatar.png";
import logo from "./img/LOGO.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <a href="/">
          <img className="logo" src={logo} alt="" />
        </a>
      </div>

      <div className="header-right">
        <ul className="nav-list">
          <li onClick={() => (window.location.href = "/")}>
            Főoldal
          </li>

          <li>Torták</li>
          <li>Rendelés</li>

          <li onClick={() => (window.location.href = "/kosar")}>
            Kosár
          </li>
        </ul>

        <img className="avatar" src={avatar} alt="user avatar" />
      </div>
    </header>
  );
}

export default Header;