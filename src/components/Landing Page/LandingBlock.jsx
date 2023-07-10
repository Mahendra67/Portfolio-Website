import React from 'react'
import './LandingBlock.css'
// import image1 from './igor-lypnytskyi-sPd834pZV1A-unsplash.jpg'
import bgimage1 from '../Images/ff4.jpg'

const LandingBlock = () => {
  return (
    <div className="landingBlock">
      <div className="portfolioBlock">
        <div className="portfolio">portfolio</div>
        <div className="desc">
          Hey there! I'm Mahendra Majhi. <br/>
          I've been diving into the world of frontend web development, building some cool projects along the way. 
          I also have a decent grasp of data structures and algorithms, and I love coding in C++.
          Feel free to reach out—I'm always up for a chat about tech or anything else that interests you!
        </div>
        <div className="LandingProfilePhoto">
          <img className="profile__landingphoto" src={bgimage1}></img>
        </div>
      </div>
    </div>
  )
}

export default LandingBlock