import React from 'react'
import { useState } from 'react'
import './ProjectCard.css'

const ProjectCard = (props) => {

  const openDeployedVer = () => {
    window.open(props.deployedLink, "_blank");
  }

  const openGithubVer = () => {
    window.open(props.githubLink, "_blank");
  }

  return (
    <div className="projectContainer">
      <div className={`projectPhoto ${props.index%2 == 0? 
        (props.transition1 ? 'slide_in_op': 'slide_out_op') : (props.transition1 ? 'slide_in' : 'slide_out')}`}> 
        <img src={props.picSrc} className="pphoto"/>
        <div className="Number">{props.pid}</div>
      </div>
      <div className="ProjectDesc">
        <div className={`Name ${props.index%2 != 0? 
        (props.transition1 ? 'slide_in_op' : 'slide_out_op') : (props.transition1 ? 'slide_in' : 'slide_out')}`}>
          {props.projTitle}
          </div>
        <div className={`projectDetails ${props.index%2 != 0? 
        (props.transition1 ? 'slide_in_op' : 'slide_out_op')  : (props.transition1 ? 'slide_in_desc' : 'slide_out_desc')}`}>
          {props.projTechStack}
          </div>
        <div className={`links ${props.index%2 != 0? 
        (props.transition1 ? 'slide_in_op' : 'slide_out_op') : (props.transition1 ? 'slide_in' : 'slide_out')}`}>
          <div className={`deployedLink`}>
            <div className={`link`} onClick={openDeployedVer}>Link</div>
            <div className="arrow" onClick={openDeployedVer}>&#8680;</div>
          </div>
          <div className="Github">
            <div className="link" onClick={openGithubVer} >Github</div>
            <div className="arrow" onClick={openGithubVer} >&#8680;</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard