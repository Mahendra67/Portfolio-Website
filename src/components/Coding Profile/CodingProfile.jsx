import React from 'react'
import photo1 from "../Images/LeetCode_Sharing.png"
import photo2 from "../Images/codechef.png"
import photo3 from "../Images/codeforces.png"

import './CodingProfile1.css'
import Profile from './Profile.jsx'

var info = [
  {
    name: "codechef",
    maxRating: 1518,
    desc: "It is a nice platform to start competitive programming.",
    siteImg: photo2,
    link: "https://www.codechef.com/users/mahendra53"
  },
  {
    name: "codeforces",
    maxRating: 951,
    desc: "It offers higher frequency of coding competitions.",
    siteImg: photo3,
    link:"https://codeforces.com/profile/mahendra53"
  },
  {
    name: "leetcode",
    maxRating: 1596,
    desc: "The best thing about this platform is it's community support.",
    siteImg: photo1,
    link:"https://leetcode.com/MahendraMajhi5367/"
  }
]

const CodingProfile = () => {
  return (
  <div className="profileContainer">
    <div className="innerContainer">
      <div className="containerName">Coding Profiles</div>
      <div className="containerElements">
        <Profile cardInfo={info[2]}/>
        <Profile cardInfo={info[0]}/>
        <Profile cardInfo={info[1]}/>
      </div>
    </div>
  </div>
  )
}

export default CodingProfile