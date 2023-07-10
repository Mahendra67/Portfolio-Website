import React from 'react'
import './ProjectsAll.css'
import FullProjectDisp from './projectDispCard.jsx'
import image111 from '../Images/rb_cat.jpg'
import image222 from '../Images/br_ball.jpg'
import image333 from '../Images/br_jelly.jpg'
import image444 from '../Images/portfolioImg16_9.png'

const ProjectsAll = () => {
  var allProj = [
    {
      name:"Portfolio Website",
      desc:"It features a clean and minimalist design and acts as my visual resume.",
      link:"https://mahendra67.github.io/Portfolio-Website/",
      github:"https://github.com/Mahendra67/Portfolio-Website",
      img:image444,
      techstack:"HTML, CSS, Javascript, ReactJS"
    },
    {
      name:"Don't Touch",
      desc:"Take control of the player ball using your mouse and navigate the endless challenge of avoiding red balls.",
      link:"https://mahendra67.github.io/Dont-Touch-V1/",
      github:"https://github.com/Mahendra67/Dont-Touch-V1",
      img:image222,
      techstack:"HTML, CSS, Javascript"
    },
    {
      name:"Cat generator",
      desc:"It uses the CATAAS API to fetch CAT images/GIF and display them according in the DOM.",
      link:"https://mahendra67.github.io/random-cat-generator/",
      github:"https://github.com/Mahendra67/random-cat-generator",
      img:image111,
      techstack:"HTML, CSS, Javascipt"
    },
    {
      name:"Spider Movement",
      desc:"This was an experiment project in which I tried to simulate the motion of a spider through different moving particles.",
      link:"https://mahendra67.github.io/Spider-Animation/",
      github:"https://github.com/Mahendra67/Spider-Animation",
      img:image333,
      techstack:"HTML, CSS, Javascript"
    }
  ]


  return (
        <div className="projectsAllContainer">
          <div className="projectsMainBlock">
            {
            allProj.map((proj) => {
              return <FullProjectDisp projInfo__1={proj}/>;
            })
            }
          </div>
        </div>
    )
}

export default ProjectsAll