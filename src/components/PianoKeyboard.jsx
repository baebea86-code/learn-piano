import { useState } from "react";

function PianoKeyboard() {
  const [activeNote, setActiveNote] = useState("");

  const notes = {
    C: 261.63,
    D: 293.66,
    E: 329.63,
    F: 349.23,
    G: 392.0,
    A: 440.0,
    B: 493.88,
  };

  const playNote = (note) => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.frequency.value = notes[note];
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + 1
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1);

    setActiveNote(note);

    setTimeout(() => {
      setActiveNote("");
    }, 200);
  };

  return (
    <div>
      <div className="piano-keyboard">
        {Object.keys(notes).map((note) => (
          <button
            key={note}
            className={`piano-key ${
              activeNote === note ? "active" : ""
            }`}
            onClick={() => playNote(note)}
          >
            {note}
          </button>
        ))}
      </div>

      <p className="selected-note">
        {activeNote
          ? `You're playing ${activeNote}`
          : "Click a key to hear its note"}
      </p>
    </div>
  );
}

export default PianoKeyboard;