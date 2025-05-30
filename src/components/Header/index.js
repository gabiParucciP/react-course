import { Link } from "react-router-dom";
import "./style.css";
function Header() {
  return (
    <header>
      <h2>Header</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/sobre">Sobre</Link>
      </div>
    </header>
  );
}

export default Header;
