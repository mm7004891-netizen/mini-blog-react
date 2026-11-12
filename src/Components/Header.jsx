import { Link } from "react-router";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          Mon Mini Blog
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
