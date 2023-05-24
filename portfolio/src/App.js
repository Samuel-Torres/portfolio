import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// route components:
import AboutMe from './routes/aboutMe/AboutMe';
import Projects from './routes/projects/Projects'
import WorkHistory from './routes/workHistory/WorkHistory';

// components:
import Navbar from './components/navBar/navBar';

// Nav Bar data:
import { navBarData } from './data/navBar';
import { projects } from './data/projectData';

function App() {

  return (
      <div className='app_container'>
        <BrowserRouter>
        <Navbar navDataProps={navBarData} />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects/:id" element={<Projects data={projects}/>} />
            <Route path="/work-history" element={<WorkHistory />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
