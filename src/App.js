import Headbar from './components/Headbar/Headbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import FrontBody from './components/FrontBody';
import './App.css'
// import ContactPage from './components/ContactPage';
import ProjectsAll from './components/All_Projects/ProjectsAll.jsx';
import {Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import { Component } from 'react';

function App() {
  return (
    <div>
      <ScrollToTop/>
      <Headbar />
    
      <Routes>
        <Route path="/" element={<FrontBody />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/projects" element={<ProjectsAll />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
