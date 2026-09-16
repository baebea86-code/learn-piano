import { Link } from "react-router-dom";

function LessonCard({ number, title, description, link }) {
  return (
    <div className="lesson-card">
      <div className="lesson-card-number">{number}</div>
      <div className="lesson-card-body">
        <h3 className="lesson-card-title">{title}</h3>
        <p className="lesson-card-desc">{description}</p>
      </div>
      <Link to={link} className="lesson-card-link">
        Start Lesson
        <span className="lesson-card-arrow">→</span>
      </Link>
    </div>
  );
}

export default LessonCard;
