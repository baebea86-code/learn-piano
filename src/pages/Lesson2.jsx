import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PianoKeyboard from "../components/PianoKeyboard";

function Lesson2() {
const navigate = useNavigate();

  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizComplete, setQuizComplete] = useState(false);

  const correctAnswer = "E";

  const checkAnswer = () => {
    setQuizComplete(true);
  };

  return (
    <main className="lesson-page">
      <p className="lesson-eyebrow">LESSON 02</p>

      <h1>Find Your Notes</h1>

      <p className="lesson-intro">
        Now that you know the keyboard, let's learn how to find the notes.
      </p>

      <section className="lesson-content">
        <h2>The musical alphabet</h2>

        <p>
          Piano notes use the letters A, B, C, D, E, F and G. After G, the
          pattern starts again at A.
        </p>

        <p>
          On the keyboard, these seven notes repeat across the piano. Learning
          their order will make finding notes much easier.
        </p>

        <div className="note-sequence">
          <span>A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
          <span>E</span>
          <span>F</span>
          <span>G</span>
        </div>
      </section>

      <section className="keyboard-section">
        <h2>Explore the notes</h2>

        <p>
          Click the keys and listen to how each note sounds.
        </p>

        <PianoKeyboard />
      </section>

      <section className="lesson-activity">
        <p className="lesson-eyebrow">TRY IT YOURSELF</p>

        <h2>Find the E</h2>

        <p>
          Use the keyboard above to find the note <strong>E</strong>.
        </p>

        <button
          className="activity-button"
          onClick={() => setShowQuiz(true)}
        >
          I found E
        </button>
      </section>

      {showQuiz && (
        <section className="quiz-section">
          <p className="lesson-eyebrow">QUICK CHECK</p>

          <h2>What comes after D?</h2>

          <div className="quiz-options">
            {["C", "E", "G"].map((option) => (
              <button
                key={option}
                className={
                  selectedAnswer === option
                    ? "quiz-option selected"
                    : "quiz-option"
                }
                onClick={() => setSelectedAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {!quizComplete && (
            <button className="quiz-submit" onClick={checkAnswer}>
              Check My Answer
            </button>
          )}

          {quizComplete && (
            <div className="quiz-result">
              {selectedAnswer === correctAnswer ? (
                <>
                  <h3>Correct! 🎹</h3>
                  <p>D comes before E. You're getting it!</p>
                </>
              ) : (
                <>
                  <h3>Not quite.</h3>
                  <p>
                    The correct answer is E. Have another look at the note
                    sequence above.
                  </p>
                </>
              )}
            </div>
          )}
        </section>
      )}

      <button
  className="quiz-submit"
  onClick={() => navigate("/lesson/3")}
>
  Continue to Lesson 3
</button>
    </main>
  );
}

export default Lesson2;