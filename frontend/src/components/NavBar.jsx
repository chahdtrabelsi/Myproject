import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand fw-bold" to="/">Riviera Tunisie</Link>

      <div className="navbar-nav">
        <Link className="nav-link" to="/">Accueil</Link>
        <Link className="nav-link" to="/reservation">Réservations</Link>
        <Link className="nav-link" to="/services">Services</Link>
      </div>
    </nav>
  );
}