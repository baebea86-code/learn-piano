import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LearningJourney from "./components/LearningJourney";
import PracticeSection from "./components/PracticeSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LearningJourney />
      <PracticeSection />
      <Footer />
    </div>
  );
}

export default App;