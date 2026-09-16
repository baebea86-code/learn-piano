function Progress() {
  return (
    <main className="progress-page">
      <p className="lesson-eyebrow">YOUR PROGRESS</p>

      <h1>Keep Going.</h1>

      <p className="lesson-intro">
        You're building your piano skills one lesson at a time.
      </p>

      <section className="progress-overview">
        <div className="progress-circle">
          <strong>0%</strong>
          <span>Complete</span>
        </div>

        <div>
          <h2>Your Learning Journey</h2>

          <p>
            Complete your lessons and quizzes to track your progress.
          </p>
        </div>
      </section>

      <section className="progress-lessons">
        <div className="progress-card">
          <span>01</span>

          <div>
            <h3>Meet Your Piano</h3>
            <p>Get familiar with the layout of your keyboard.</p>
          </div>

          <strong>Not started</strong>
        </div>

        <div className="progress-card">
          <span>02</span>

          <div>
            <h3>Find Your Notes</h3>
            <p>Learn how to find the notes on your keyboard.</p>
          </div>

          <strong>Not started</strong>
        </div>

        <div className="progress-card">
          <span>03</span>

          <div>
            <h3>Meet Your Fingers</h3>
            <p>Learn finger numbers and your basic hand position.</p>
          </div>

          <strong>Not started</strong>
        </div>
      </section>
    </main>
  );
}

export default Progress;