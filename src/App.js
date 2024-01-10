import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={<Home />} />
          <Route path='/resume' Component={<Resume />} />
          <Route path='/projects' Component={<Projects />} />
          <Route path='/experience' Component={<Experience />} />
          <Route path='/contact' Component={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
