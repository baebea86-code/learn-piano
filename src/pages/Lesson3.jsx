import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PianoKeyboard from "../components/PianoKeyboard";
import Navbar from "../components/Navbar";

function Lesson3() {
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizComplete, setQuizComplete] = useState(false);

  const correctAnswer = "Thumb";

  const checkAnswer = () => {
    setQuizComplete(true);
  };

  return (
    <div className="lesson-page">
      <Navbar />
      <div className="lesson-page-inner">
        <p className="lesson-eyebrow">LESSON 03</p>

        <h1>Meet Your Fingers</h1>

        <p className="lesson-intro">
          Your fingers have numbers too. Learning them will help you understand
          piano exercises and sheet music.
        </p>

        <section className="lesson-content">
          <h2>Finger numbers</h2>
          <p>
            When playing piano, each finger is given a number. Both hands use
            the same numbering system.
          </p>
          <div className="finger-guide">
            <div>
              <span>1</span>
              <p>Thumb</p>
            </div>
            <div>
              <span>2</span>
              <p>Index</p>
            </div>
            <div>
              <span>3</span>
              <p>Middle</p>
            </div>
            <div>
              <span>4</span>
              <p>Ring</p>
            </div>
            <div>
              <span>5</span>
              <p>Pinky</p>
            </div>
          </div>
          <p>
            So when you see <strong>1</strong> in a piano exercise, you know to
            use your thumb. A <strong>5</strong> means your pinky.
          </p>
        </section>

        <section className="lesson-content">
          <h2>Basic hand position</h2>
          <p>
            Keep your fingers gently curved and relaxed. Avoid pressing down too
            hard on the keys.
          </p>
          <p>
            Start with your hand relaxed above the keyboard. Your fingers should
            feel natural rather than stretched or tense.
          </p>
        </section>

        <section className="keyboard-section">
          <h2>Try your hand position</h2>
          <p>
            Place your fingers comfortably above the keys and explore the
            keyboard.
          </p>
          <PianoKeyboard />
        </section>

        <section className="lesson-activity">
          <p className="lesson-eyebrow">TRY IT YOURSELF</p>
          <h2>Remember your thumb</h2>
          <p>
            Finger <strong>1</strong> is your thumb. Try playing a few keys
            using your thumb and notice how it feels.
          </p>
          <button className="activity-button" onClick={() => setShowQuiz(true)}>
            I'm ready for the quiz
          </button>
        </section>

        {showQuiz && (
          <section className="quiz-section">
            <p className="lesson-eyebrow">QUICK CHECK</p>
            <h2>Which finger is number 1?</h2>

            <div className="quiz-options">
              {["Thumb", "Index", "Pinky"].map((option) => (
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
                    <p>
                      Your thumb is finger number 1. You're ready to start
                      using finger numbers in your practice.
                    </p>
                  </>
                ) : (
                  <>
                    <h3>Not quite.</h3>
                    <p>
                      Finger number 1 is your thumb. Have another look at the
                      finger guide above.
                    </p>
                  </>
                )}
              </div>
            )}
          </section>
        )}

        <button className="quiz-submit" onClick={() => navigate("/progress")}>
          Finish Learning Journey →
        </button>
      </div>
    </div>
  );
}

export default Lesson3;
