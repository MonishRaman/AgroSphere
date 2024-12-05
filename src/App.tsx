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
import {GovConnect} from './pages/GovConnect';
import {AgriMart} from './pages/AgriMart';
import {Discover} from './pages/Discover';
import {Faqs } from './pages/Faqs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar includes dynamic profile image and greeting */}
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
          <Route path="/govconnect" element={<GovConnect />} />
          <Route path="/agrimart" element={<AgriMart />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/faqs" element={<Faqs />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;