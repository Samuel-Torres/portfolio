import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// route components:
import AboutMe from './routes/aboutMe/AboutMe';
import ProjectPage from './routes/projects/ProjectPage';
import WorkHistory from './routes/workHistory/WorkHistory';
import Contact from './routes/contact/Contact';
import NotFound from './routes/notFound/NotFound';

// components:
import Navbar from './components/navBar/NavBar';

// Nav Bar data:
import { navBarData } from './data/navBar';
import { projects } from './data/projectData';
import { aboutMe } from './data/about';
import { workHistory } from './data/workHistory';

function App() {
  return (
    <>
      <div className='border-gradient border-gradient-green-top only-top'>
      </div>
      <div className='app_container'>
          <BrowserRouter>
          <Navbar navDataProps={navBarData} />
            <Routes>
              <Route exact path="/" element={<AboutMe data={aboutMe} />} />
              <Route path="/about-me" element={<AboutMe data={aboutMe} />} />
              <Route path="/projects/:id" element={<ProjectPage data={projects}/>} />
              <Route path="/work-history/:id" element={<WorkHistory data={workHistory}/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </BrowserRouter>
        </div>
        <div className='border-gradientTwo border-gradient-green-bottom only-bottom'>
        </div>
    </>
  );
}

export default App;
