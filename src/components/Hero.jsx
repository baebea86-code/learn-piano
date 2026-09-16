import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge">🎵 Real lessons. Real progress.</span>
          </div>

          <h1 className="hero-headline">
            Learn piano the <em>right</em> way.
          </h1>

          <p className="hero-description">
            Step-by-step lessons designed for complete beginners. Build real
            skills at your own pace — no experience needed.
          </p>

          <div className="hero-actions">
            <Link to="/lesson/1" className="btn-primary">
              Start Learning — It's Free
            </Link>
            <Link to="/progress" className="btn-ghost">
              View My Progress
            </Link>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <span className="hero-feature-icon">✓</span>
              <span>Structured lessons</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">✓</span>
              <span>Interactive keyboard</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">✓</span>
              <span>Progress tracking</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-top">
              <span className="eyebrow">NOW PLAYING</span>
              <h3>Lesson 01 — Meet Your Piano</h3>
              <p>Get comfortable with the keyboard layout before playing your first notes.</p>
            </div>
            <div className="hero-piano-emoji">🎹</div>
            <Link to="/lesson/1" className="btn-primary hero-card-btn">
              Start Lesson
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
