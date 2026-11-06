import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PianoKeyboard from "../components/PianoKeyboard";
import Navbar from "../components/Navbar";

function Lesson5() {
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = [
    {
      question: "How many notes are in a major scale?",
      options: ["5", "7", "8"],
      answer: "8",
    },
    {
      question: "What pattern do major scales follow?",
      options: [
        "Whole, Whole, Half, Whole, Whole, Whole, Half",
        "Half, Half, Whole, Half, Half, Half, Whole",
        "Whole, Half, Whole, Whole, Half, Whole, Whole",
      ],
      answer: "Whole, Whole, Half, Whole, Whole, Whole, Half",
    },
    {
      question: "The C major scale uses which keys?",
      options: [
        "All the white keys from C to C",
        "All the black keys",
        "A mix of black and white keys",
      ],
      answer: "All the white keys from C to C",
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
        <p className="lesson-eyebrow">LESSON 05</p>

        <h1>Understanding Scales</h1>

        <p className="lesson-intro">
          Scales are the building blocks of music. Once you understand them,
          melodies and songs start to make a lot more sense.
        </p>

        <section className="lesson-content">
          <h2>What is a scale?</h2>
          <p>
            A scale is a set of notes played in a specific order, going up or
            down in pitch. The most common one you'll encounter is the
            <strong> major scale</strong>.
          </p>
          <p>
            You've actually heard major scales your whole life — they have that
            bright, happy sound. Think <em>Do Re Mi Fa Sol La Ti Do</em>.
          </p>
        </section>

        <section className="lesson-content">
          <h2>The C major scale</h2>
          <p>
            The best scale to start with is <strong>C major</strong> because it
            uses only the white keys: C, D, E, F, G, A, B — then C again one
            octave higher.
          </p>
          <div className="note-sequence">
            <span>C</span>
            <span>D</span>
            <span>E</span>
            <span>F</span>
            <span>G</span>
            <span>A</span>
            <span>B</span>
            <span>C</span>
          </div>
          <p>
            That's 8 notes total. The first and last note share the same name
            (C) but the last one is higher in pitch.
          </p>
        </section>

        <section className="lesson-content">
          <h2>The whole and half step pattern</h2>
          <p>
            Every major scale follows the same pattern of steps:
          </p>
          <p>
            <strong>Whole – Whole – Half – Whole – Whole – Whole – Half</strong>
          </p>
          <p>
            A <strong>whole step</strong> skips one key. A <strong>half step</strong> moves
            to the very next key. In C major, all the half steps fall between
            E–F and B–C — which is why there are no black keys needed.
          </p>
        </section>

        <section className="keyboard-section">
          <h2>Play the C major scale</h2>
          <p>
            Use finger numbers 1–2–3, then 1–2–3–4–5 to play C up to the next C.
            Try it slowly and listen to how the scale sounds.
          </p>
          <PianoKeyboard />
        </section>

        <section className="lesson-activity">
          <p className="lesson-eyebrow">TRY IT YOURSELF</p>
          <h2>Play C major going up and down</h2>
          <p>
            Play the scale from C to C going up, then come back down from C to C.
            Try to keep a steady rhythm as you go.
          </p>
          <button className="activity-button" onClick={() => setShowQuiz(true)}>
            I can play it both ways
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
                  <p>Brilliant! 🎹 You understand scales. On to your first song!</p>
                ) : (
                  <p>Good effort! Review the scale pattern and try again.</p>
                )}
              </div>
            )}
          </section>
        )}

        <button className="quiz-submit" onClick={() => navigate("/lesson/6")}>
          Continue to Lesson 6 →
        </button>
      </div>
    </div>
  );
}

export default Lesson5;
