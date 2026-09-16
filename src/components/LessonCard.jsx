function LessonCard({ number, title, description }) {
  return (
    <div className="lesson-card">
      <p className="lesson-number">{number}</p>

      <h3>{title}</h3>

      <p>{description}</p>

      <a href="/lesson/1">Start Lesson</a>
    </div>
  );
}

export default LessonCard;