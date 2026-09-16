import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">🎹</span>
            <span className="footer-logo-text">Learn<strong>Piano</strong></span>
          </div>
          <p className="footer-tagline">
            Start where you are. Learn at your own pace.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4 className="footer-col-heading">Learn</h4>
            <nav className="footer-nav">
              <Link to="/lesson/1" className="footer-link">Lesson 1</Link>
              <Link to="/lesson/2" className="footer-link">Lesson 2</Link>
              <Link to="/lesson/3" className="footer-link">Lesson 3</Link>
            </nav>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-heading">Account</h4>
            <nav className="footer-nav">
              <Link to="/progress" className="footer-link">My Progress</Link>
              <a href="#lessons" className="footer-link">All Lessons</a>
              <a href="#practice" className="footer-link">Practice</a>
            </nav>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copy">© 2026 LearnPiano. Keep playing.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
