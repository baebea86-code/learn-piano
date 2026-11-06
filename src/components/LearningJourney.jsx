import LessonCard from "./LessonCard";

function LearningJourney() {
  return (
    <section className="journey" id="lessons">
      <div className="journey-inner">
        <div className="journey-header">
          <span className="eyebrow">YOUR PIANO JOURNEY</span>
          <h2 className="journey-title">
            Build your foundation,<br />one step at a time.
          </h2>
          <p className="journey-subtitle">
            Our structured method takes you from zero to playing real music —
            no prior experience needed.
          </p>
        </div>

        <div className="lesson-grid">
          <LessonCard
            number="01"
            title="Meet Your Piano"
            description="Get familiar with the layout of your keyboard and understand how the keys are arranged."
            link="/lesson/1"
          />
          <LessonCard
            number="02"
            title="Find Your Notes"
            description="Learn how to find C, D, E, F, G, A and B on the keyboard using patterns."
            link="/lesson/2"
          />
          <LessonCard
            number="03"
            title="Meet Your Fingers"
            description="Learn finger numbers and establish your basic hand position for playing."
            link="/lesson/3"
          />
          <LessonCard
            number="04"
            title="Understanding Your Number System"
            description="Discover how finger numbers guide your playing and make reading exercises easy."
            link="/lesson/4"
          />
          <LessonCard
            number="05"
            title="Understanding Scales"
            description="Learn what scales are and how to play the C major scale up and down the keyboard."
            link="/lesson/5"
          />
          <LessonCard
            number="06"
            title="Playing Your First Song"
            description="Put everything together and play Mary Had a Little Lamb — your first real piece."
            link="/lesson/6"
          />
        </div>

        <div className="journey-footer">
          <span className="journey-footer-text">6 lessons · self-paced · free to start</span>
        </div>
      </div>
    </section>
  );
}

export default LearningJourney;
