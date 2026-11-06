import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PianoKeyboard from "../components/PianoKeyboard";
import Navbar from "../components/Navbar";

function Lesson6() {
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = [
    {
      question: "What does it mean to keep a steady beat?",
      options: [
        "To play as fast as possible",
        "To play each note evenly without rushing or slowing down",
        "To play only the loud notes",
      ],
      answer: "To play each note evenly without rushing or slowing down",
    },
    {
      question: "What is the melody of a song?",
      options: [
        "The main tune you can sing or hum",
        "The rhythm clapped in the background",
        "The chords played by the left hand",
      ],
      answer: "The main tune you can sing or hum",
    },
    {
      question: "Which hand plays the melody in most beginner songs?",
      options: ["Left hand", "Both hands equally", "Right hand"],
      answer: "Right hand",
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
        <p className="lesson-eyebrow">LESSON 06</p>

        <h1>Playing Your First Song</h1>

        <p className="lesson-intro">
          You've learned the keys, the notes, finger numbers, and scales. Now
          it's time to put it all together and play your very first song.
        </p>

        <section className="lesson-content">
          <h2>What you'll play</h2>
          <p>
            We're going to learn <strong>Mary Had a Little Lamb</strong> — a
            classic beginner piece that uses only the notes E, D, C, and G.
            It's short, recognisable, and a great way to start playing real music.
          </p>
        </section>

        <section className="lesson-content">
          <h2>The notes</h2>
          <p>
            Here is the melody written out with finger numbers for your right hand,
            starting with finger 3 on E:
          </p>
          <div className="note-sequence">
            <span>E</span>
            <span>D</span>
            <span>C</span>
            <span>D</span>
            <span>E</span>
            <span>E</span>
            <span>E</span>
          </div>
          <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
            <em>Ma-ry had a lit-tle lamb</em>
          </p>
          <div className="note-sequence" style={{ marginTop: "1rem" }}>
            <span>D</span>
            <span>D</span>
            <span>D</span>
          </div>
          <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
            <em>lit-tle lamb</em>
          </p>
          <div className="note-sequence" style={{ marginTop: "1rem" }}>
            <span>E</span>
            <span>G</span>
            <span>G</span>
          </div>
          <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
            <em>lit-tle lamb</em>
          </p>
        </section>

        <section className="lesson-content">
          <h2>Finger numbers to use</h2>
          <p>
            Place your right hand so finger <strong>1 (thumb)</strong> is on C.
            That means:
          </p>
          <div className="finger-guide">
            <div><span>1</span><p>C</p></div>
            <div><span>2</span><p>D</p></div>
            <div><span>3</span><p>E</p></div>
            <div><span>4</span><p>F</p></div>
            <div><span>5</span><p>G</p></div>
          </div>
          <p>
            So for Mary Had a Little Lamb: start on finger <strong>3</strong> (E),
            then use 2 (D), 1 (C), 2 (D), 3 (E), 3 (E), 3 (E)… and so on.
          </p>
        </section>

        <section className="lesson-content">
          <h2>Tips for playing well</h2>
          <p>
            <strong>Go slow first.</strong> Speed comes naturally once you know
            where the notes are. Start at a pace where you feel comfortable and
            gradually speed up.
          </p>
          <p>
            <strong>Count out loud.</strong> Saying "1, 2, 3, 4" while you play
            keeps your rhythm steady and prevents rushing.
          </p>
          <p>
            <strong>Keep your hand relaxed.</strong> Tension slows you down.
            Soft, curved fingers will help you move more freely.
          </p>
        </section>

        <section className="keyboard-section">
          <h2>Practice on the keyboard</h2>
          <p>
            Use the keyboard below to find your notes before playing on a real
            piano or keyboard.
          </p>
          <PianoKeyboard />
        </section>

        <section className="lesson-activity">
          <p className="lesson-eyebrow">TRY IT YOURSELF</p>
          <h2>Play Mary Had a Little Lamb</h2>
          <p>
            Take your time. Once you can play the melody all the way through at
            a steady pace, you've completed your first song!
          </p>
          <button className="activity-button" onClick={() => setShowQuiz(true)}>
            I played my first song 🎹
          </button>
        </section>

        {showQuiz && (
          <section className="quiz-section">
            <p className="lesson-eyebrow">QUICK CHECK</p>
            <h2>Let's wrap up what you've learned.</h2>

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
                  <p>Amazing! 🎹 You've completed all 6 lessons. Keep practising!</p>
                ) : (
                  <p>Good work! Review the tips and keep practising your song.</p>
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

export default Lesson6;
