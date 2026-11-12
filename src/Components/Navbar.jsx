import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/articles", label: "Articles" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <nav className="navbar" aria-label="Navigation principale">
      <ul className="navbar__list">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
