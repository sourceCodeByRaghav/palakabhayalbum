// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Engagement from './pages/Engagement';
import Mehndi from './pages/Mehndi';
import Haldi from './pages/Haldi';
import Wedding from './pages/Wedding';
import Kirtan from './pages/Kirtan';
import BangleCeremony from './pages/BangleCeremony';
import Sangeet from './pages/Sangeet';
import Shagun from './pages/Shagun';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/mehndi" element={<Mehndi />} />
          <Route path="/haldi" element={<Haldi />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/kirtan" element={<Kirtan />} />
          <Route path="/bangle-ceremony" element={<BangleCeremony />} />
          <Route path="/sangeet" element={<Sangeet />} />
          <Route path="/shagun" element={<Shagun />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;