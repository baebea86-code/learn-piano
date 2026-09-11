import LessonCard from "./LessonCard";

function LearningJourney() {
  return (
    <section className="learning-journey">
      <div className="section-heading">
        <p>YOUR PIANO JOURNEY</p>

        <h2>Build your foundation, one step at a time.</h2>
      </div>

      <div className="lesson-grid">
        <LessonCard
          number="01"
          title="Meet Your Piano"
          description="Get familiar with the layout of your keyboard."
        />

        <LessonCard
          number="02"
          title="Find Your Notes"
          description="Learn how to find C, D, E, F, G, A and B."
        />

        <LessonCard
          number="03"
          title="Meet Your Fingers"
          description="Learn finger numbers and your basic hand position."
        />
      </div>
    </section>
  );
}

export default LearningJourney;