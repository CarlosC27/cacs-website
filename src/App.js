import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import UnderConstruction from './components/UnderConstruction';
import AirplaneTextButton from './components/AirplaneTextButton';

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<UnderConstruction />} />
        <Route path="/Contact" element={<UnderConstruction />} />
        <Route path="/Projects" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;
