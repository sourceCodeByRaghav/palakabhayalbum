import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GrihaPravesh from "./pages/GrihaPravesh";
import Engagement from "./pages/Engagement";
import Mehndi from "./pages/Mehndi";
import Haldi from "./pages/Haldi";
import Wedding from "./pages/Wedding";
import Kirtan from "./pages/Kirtan";
import BangleCeremony from "./pages/BangleCeremony";
import Saint from "./pages/Saint";
import Shagun from "./pages/Shagun";
import DJNight from "./pages/DJNight";
import Footer from "./components/Footer";
import UnitedCelebration from "./pages/UnitedCelebration";
import "./App.css";

function App() {
  return (
    <Router basename="/palakabhayalbum">
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grihapravesh" element={<GrihaPravesh />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/mehndi" element={<Mehndi />} />
          <Route path="/haldi" element={<Haldi />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/kirtan" element={<Kirtan />} />
          <Route path="/bangle-ceremony" element={<BangleCeremony />} />
          <Route path="/saint" element={<Saint />} />
          <Route path="/shagun" element={<Shagun />} />
          <Route path="/dj-night" element={<DJNight />} />
          <Route path="united-celebration" element={<UnitedCelebration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
