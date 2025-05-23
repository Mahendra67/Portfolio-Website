import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import './ProjectBlock.css'
import {Link} from 'react-router-dom'


import portfolioImg from '../Images/ff4.jpg'
import dontTouchImg from '../Images/br_ball.jpg'
import catGenImg from '../Images/rb_cat.jpg'
import spiderImg from '../Images/br_jelly.jpg'
import ytLogo from '../Images/Logo_yt.png'


const ProjectBlock = () => {


  const [srcImages, setSrcImages] = useState([
    {image : ytLogo,
      name : "Youtube Filtered",
      link : "https://wevdebelopers.github.io/YoutubeFilteredDeployment/homepage.html",
      github : "https://github.com/wevdebelopers/Youtube_Filter",
      techStack : "HTML, CSS, Javascript",
      projectId : '01'
    },
    {image : portfolioImg,
      name : "Portfolio Website",
      link : "https://portfolio-website-mahendra67.vercel.app/",
      github : "https://github.com/Mahendra67/Portfolio-Website",
      techStack : "HTML, CSS, ReactJS",
      projectId : '02'
    },
    {image : dontTouchImg,
      name : "Don't Touch",
      link : "https://mahendra67.github.io/Dont-Touch-V1/",
      github : "https://github.com/Mahendra67/Dont-Touch-V1",
      techStack : "HTML, CSS, Javascript",
      projectId : '03'
    },
    {image : catGenImg,
      name : "Cat generator",
      link : "https://mahendra67.github.io/random-cat-generator/",
      github : "https://github.com/Mahendra67/random-cat-generator",
      techStack : "HTML, CSS, Javascript",
      projectId : '04'
    },
    {image : spiderImg,
      name : "Spider Movement",
      link : "https://mahendra67.github.io/Spider-Animation/",
      github : "https://github.com/Mahendra67/Spider-Animation",
      techStack : "HTML, CSS, Javascript",
      projectId : '05'
    }
  ]);


  //1 means left clicked
  //2 means right
  //0 means no click
  const [transition, setTransition] = useState(false);

  const sendRightSignal = () => {
    setTransition(true);

    setTimeout(() => {
      var temp = [];
      for(var i=1; i<srcImages.length; i++){
        temp.push(srcImages[i]);
      }
      temp.push(srcImages[0]);

      setSrcImages(temp);
      setTransition(false);
    }, 500);
    
  }

  const sendLeftSignal = () => {
    setTransition(true);

    setTimeout(() => {
      var temp = [];
      temp.push(srcImages[srcImages.length-1]);
      for(var i=0; i<srcImages.length-1; i++){
        temp.push(srcImages[i]);
      }

      setSrcImages(temp);
      setTransition(false);
    }, 500);
  }

  var idx = -1;

  return (
    <div className="ProjectBlockContainer">
      <div className="projectScreenContainer">
        <div className="smallScreenTitle">projects</div>
        <div className="projectShowcaseContainer">
          {srcImages.map((data) => {
            idx++;
            return <ProjectCard 
                      picSrc={data.image} 
                      projTitle={data.name} 
                      projTechStack={data.techStack}
                      deployedLink={data.link}
                      githubLink={data.github}
                      pid = {data.projectId}
                      index={idx} 
                      transition1={transition}/>;
          })}
        </div>
        <div className="projectMoveConatiner">
          <div className="project">projects</div>
          <button className="seeAll">
            <Link className="view_all_projects_btn" to="/projects">View All Projects</Link>
          </button>
          <div className="moveBox">
            <button className="left" onClick={sendLeftSignal}>&lt;</button>
            <button className="right" onClick={sendRightSignal}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectBlock
