import React from 'react'
import './FrontBody.css'

import LandingBlock from './Landing Page/LandingBlock.jsx';
import ProjectBlock from './Project Showcase/ProjectBlock.jsx';
import CodingProfile from './Coding Profile/CodingProfile.jsx';
import ContactPage from './Unused Components/ContactPage';


const FrontBody = () => {
  return (
    <div className="fbody">
        <LandingBlock />
        <ProjectBlock />
        <CodingProfile />
        {/* <ContactPage /> */}
    </div>
  )
}

export default FrontBody