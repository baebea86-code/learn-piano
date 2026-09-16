import { Link } from "react-router-dom";

function PracticeSection() {
  return (
    <section className="practice" id="practice">
      <div className="practice-inner">
        <div className="practice-visual">
          <div className="practice-keyboard-card">
            <span className="eyebrow">INTERACTIVE</span>
            <div className="practice-emoji">🎹</div>
            <p className="practice-keyboard-label">Play the keys in each lesson</p>
            <div className="practice-keys-row">
              {["C","D","E","F","G","A","B"].map((n) => (
                <div key={n} className="practice-mini-key">{n}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="practice-content">
          <span className="eyebrow">PRACTICE</span>
          <h2 className="practice-title">
            Don't just learn it.<br />
            <em>Play</em> it.
          </h2>
          <p className="practice-desc">
            Every lesson includes an interactive keyboard so you can hear and
            feel the notes as you learn them. Put what you've learned into
            practice and start getting comfortable at the keys.
          </p>

          <ul className="practice-list">
            <li>
              <span className="practice-check">✓</span>
              Real-time audio feedback on every note
            </li>
            <li>
              <span className="practice-check">✓</span>
              Guided activities in every lesson
            </li>
            <li>
              <span className="practice-check">✓</span>
              Quick quizzes to lock in what you learn
            </li>
          </ul>

          <Link to="/lesson/1" className="btn-primary">
            Start Practicing
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PracticeSection;
