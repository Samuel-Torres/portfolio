import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// route components:
import AboutMe from './routes/aboutMe/AboutMe';
import ProjectPage from './routes/projects/ProjectPage';
import WorkHistory from './routes/workHistory/WorkHistory';

// components:
import Navbar from './components/navBar/navBar';

// Nav Bar data:
import { navBarData } from './data/navBar';
import { projects } from './data/projectData';
import { aboutMe } from './data/about';

function App() {
  console.log("BIO: ", aboutMe)
  return (
    <>
      <div className='border-gradient border-gradient-green only-top'>
      </div>
      <div className='app_container'>
          <BrowserRouter>
          <Navbar navDataProps={navBarData} />
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/about-me" element={<AboutMe data={aboutMe} />} />
              <Route path="/projects/:id" element={<ProjectPage data={projects}/>} />
              <Route path="/work-history" element={<WorkHistory />} />
            </Routes>
          </BrowserRouter>
        </div>
        <div className='border-gradientTwo border-gradient-green only-bottom'>
        </div>
    </>
  );
}

export default App;
