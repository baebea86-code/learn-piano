function LessonCard({ number, title, description }) {
  return (
    <div className="lesson-card">
      <p className="lesson-number">{number}</p>

      <h3>{title}</h3>

      <p>{description}</p>

      <button>Start Lesson</button>
    </div>
  );
}

export default LessonCard;