function LessonCard({ number, title, description, link }) {
  return (
    <div className="lesson-card">
      <p className="lesson-number">{number}</p>

      <h3>{title}</h3>

      <p>{description}</p>

      <a href={link}>Start Lesson</a>
    </div>
  );
}

export default LessonCard;