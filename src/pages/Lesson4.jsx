import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Lesson4() {
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = [
    {
      question: "What does the number above a note tell you?",
      options: ["Which finger to use", "How loud to play", "How long to hold it"],
      answer: "Which finger to use",
    },
    {
      question: "If you see the number 2 in a piano exercise, which finger do you use?",
      options: ["Thumb", "Index finger", "Pinky"],
      answer: "Index finger",
    },
    {
      question: "Why are finger numbers useful?",
      options: [
        "They tell you the note name",
        "They help you play smoothly and efficiently",
        "They show you the tempo",
      ],
      answer: "They help you play smoothly and efficiently",
    },
  ];

  const handleAnswer = (questionIndex, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: answer });
  };

  const checkQuiz = () => {
    setQuizComplete(true);
  };

  const score = questions.reduce((total, question, index) => {
    return total + (selectedAnswers[index] === question.answer ? 1 : 0);
  }, 0);

  return (
    <div className="lesson-page">
      <Navbar />
      <div className="lesson-page-inner">
        <p className="lesson-eyebrow">LESSON 04</p>

        <h1>Understanding Your Number System</h1>

        <p className="lesson-intro">
          Finger numbers are one of the most important tools in piano learning.
          Once you understand the system, reading exercises becomes much easier.
        </p>

        <section className="lesson-content">
          <h2>What are finger numbers?</h2>
          <p>
            Every piano exercise uses a numbering system to tell you exactly
            which finger to place on which key. Both hands share the same
            numbers — 1 through 5.
          </p>
          <div className="finger-guide">
            <div><span>1</span><p>Thumb</p></div>
            <div><span>2</span><p>Index</p></div>
            <div><span>3</span><p>Middle</p></div>
            <div><span>4</span><p>Ring</p></div>
            <div><span>5</span><p>Pinky</p></div>
          </div>
          <p>
            When you see a small number written above or below a note, that
            number is telling you exactly which finger to use.
          </p>
        </section>

        <section className="lesson-content">
          <h2>Why does it matter?</h2>
          <p>
            Using the right finger on the right key keeps your hand relaxed and
            lets you move across the keyboard smoothly. It also sets you up for
            playing more complex pieces later on.
          </p>
          <p>
            Think of finger numbers like instructions — they take the guesswork
            out and let you focus on the music.
          </p>
        </section>

        <section className="lesson-content">
          <h2>Putting it into practice</h2>
          <p>
            Try placing your right hand so your thumb (1) sits on <strong>C</strong>,
            your index (2) on <strong>D</strong>, your middle (3) on <strong>E</strong>,
            your ring (4) on <strong>F</strong>, and your pinky (5) on <strong>G</strong>.
          </p>
          <p>
            Play each finger one at a time in order: 1, 2, 3, 4, 5. Then try
            going back down: 5, 4, 3, 2, 1.
          </p>
        </section>

        <section className="lesson-activity">
          <p className="lesson-eyebrow">TRY IT YOURSELF</p>
          <h2>Play 1 through 5</h2>
          <p>
            Place your right hand on C–D–E–F–G and play each finger in order.
            Once you can do it comfortably both ways, you're ready for the quiz.
          </p>
          <button className="activity-button" onClick={() => setShowQuiz(true)}>
            I'm ready for the quiz
          </button>
        </section>

        {showQuiz && (
          <section className="quiz-section">
            <p className="lesson-eyebrow">QUICK CHECK</p>
            <h2>Let's see what you remember.</h2>

            {questions.map((question, questionIndex) => (
              <div className="quiz-question" key={question.question}>
                <h3>
                  {questionIndex + 1}. {question.question}
                </h3>
                <div className="quiz-options">
                  {question.options.map((option) => (
                    <button
                      key={option}
                      className={
                        selectedAnswers[questionIndex] === option
                          ? "quiz-option selected"
                          : "quiz-option"
                      }
                      onClick={() => handleAnswer(questionIndex, option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {!quizComplete && (
              <button className="quiz-submit" onClick={checkQuiz}>
                Check My Answers
              </button>
            )}

            {quizComplete && (
              <div className="quiz-result">
                <h3>
                  You scored {score} / {questions.length}
                </h3>
                {score === questions.length ? (
                  <p>Perfect! 🎹 You've mastered the number system.</p>
                ) : (
                  <p>Nice try! Review the lesson and give it another shot.</p>
                )}
              </div>
            )}
          </section>
        )}

        <button className="quiz-submit" onClick={() => navigate("/lesson/5")}>
          Continue to Lesson 5 →
        </button>
      </div>
    </div>
  );
}

export default Lesson4;
