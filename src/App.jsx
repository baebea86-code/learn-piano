import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LearningJourney from "./components/LearningJourney";
import PracticeSection from "./components/PracticeSection";
import Footer from "./components/Footer";
import Lesson from "./pages/Lesson";
import Lesson2 from "./pages/Lesson2";
import Lesson3 from "./pages/Lesson3";

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
        <Route path="/lesson/2" element={<Lesson2 />} />
        <Route path="/lesson/3" element={<Lesson3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;