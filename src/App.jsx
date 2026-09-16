import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LearningJourney from "./components/LearningJourney";
import PracticeSection from "./components/PracticeSection";
import Footer from "./components/Footer";
import Lesson from "./pages/Lesson";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LearningJourney />
      <PracticeSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/1" element={<Lesson />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;