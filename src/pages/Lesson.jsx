import { useState } from "react";
import PianoKeyboard from "../components/PianoKeyboard";

function Lesson() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = [
    {
      question: "How many natural notes are there in the basic musical alphabet?",
      options: ["5", "7", "10"],
      answer: "7",
    },
    {
      question: "Which note comes after C?",
      options: ["A", "D", "G"],
      answer: "D",
    },
    {
      question: "Which note comes before G?",
      options: ["F", "A", "E"],
      answer: "F",
    },
  ];

  const handleAnswer = (questionIndex, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answer,
    });
  };

  const checkQuiz = () => {
    setQuizComplete(true);
  };

  const score = questions.reduce((total, question, index) => {
    return total + (selectedAnswers[index] === question.answer ? 1 : 0);
  }, 0);

  return (
    <main className="lesson-page">
      <p className="lesson-eyebrow">LESSON 01</p>

      <h1>Meet Your Piano</h1>

      <p className="lesson-intro">
        Before we play anything, let's get familiar with the instrument.
      </p>

      <section className="lesson-content">
        <h2>Getting to know your keyboard</h2>

        <p>
          A piano keyboard is made up of white and black keys. Once you
          understand how these keys are arranged, finding your notes becomes
          much easier.
        </p>

        <p>
          Don't worry about memorising everything yet. We're going to take
          this one step at a time.
        </p>
      </section>

      <section className="keyboard-section">
        <h2>Meet the keys</h2>

        <p>
          These are the seven natural notes you'll be learning first.
          Click a key to explore it.
        </p>

        <PianoKeyboard />
      </section>

      <section className="lesson-activity">
        <p className="lesson-eyebrow">TRY IT YOURSELF</p>

        <h2>Can you find C?</h2>

        <p>
          Find the <strong>C</strong> key on the keyboard above and play it.
        </p>

        <button
          className="activity-button"
          onClick={() => setShowQuiz(true)}
        >
          I found C
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
                <p>Perfect! 🎹 You're ready for the next lesson.</p>
              ) : (
                <p>
                  Nice try! Review the lesson and give the quiz another shot.
                </p>
              )}
            </div>
          )}
        </section>
      )}

      <button>Continue</button>
    </main>
  );
}

export default Lesson;