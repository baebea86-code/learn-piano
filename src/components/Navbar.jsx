import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">🎹</span>
          <span className="navbar-logo-text">Learn<strong>Piano</strong></span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">Learn</Link>
          <a href="#practice" className="navbar-link">Practice</a>
          <Link to="/lesson/1" className="navbar-link">Lessons</Link>
          <Link to="/progress" className="navbar-link">Progress</Link>
        </div>

        <div className="navbar-cta">
          <Link to="/lesson/1" className="btn-primary navbar-btn">
            Start Free
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
