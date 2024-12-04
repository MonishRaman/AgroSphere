import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Dashboard } from './pages/Dashboard';
import { FarmingType } from './pages/FarmingType';
import { DiseaseDetection } from './pages/DiseaseDetection';
import { YieldAnalysis } from './pages/YieldAnalysis';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Community } from './pages/Community';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/farming/:type" element={<FarmingType />} />
          <Route path="/farming/:type/diseases" element={<DiseaseDetection />} />
          <Route path="/farming/:type/yield" element={<YieldAnalysis />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;