import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// route components:
import AboutMe from './routes/aboutMe/aboutMe';
import Projects from './routes/projects/projects'
import WorkHistory from './routes/workHistory/workHistory';

// components:
import Navbar from './components/navBar/navBar';

function App() {
  return (
      <div className='app_container'>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work-history" element={<WorkHistory />} />
          </Routes>
        <h1>MAIN APP BODY</h1>
        </BrowserRouter>
      </div>
  );
}

export default App;
