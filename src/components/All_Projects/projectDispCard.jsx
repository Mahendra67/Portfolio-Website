import React from 'react'
import { useState, useEffect } from 'react';
import './ProjectDispCard.css'

const ProjectDispCard = (props) => {
    function depLink(){
        window.open(props.projInfo__1.link, "_blank");
    }

    function gitLink(){
        window.open(props.projInfo__1.github, "_blank");
    }

  return (
    <div className="projectContainer_All">
        <div className="contentDesc">
            <div className="project__name_1">
                {props.projInfo__1.name}
            </div>
            <div className="project__desc_1">
                {props.projInfo__1.desc}
            </div>
            <div className="project__techstack_1">
                {props.projInfo__1.techstack}
            </div>
            <div className="project__linksCont">
                <div className="project__deployedLink_1">
                    <div className="project__link_1" onClick={depLink}>Link</div>
                </div>
                <div className="project__github_1">
                    <div className="project__link_1" onClick={gitLink} >Github</div>
                </div>
            </div>
        </div>
        <div className="contentPic">
            <img className="project__img__1" src={props.projInfo__1.img} />
            <div className="content__overlay_desc">
                {props.projInfo__1.desc}
            </div>
            <div className="large_content_overlay">
                {props.projInfo__1.desc}
            </div>
        </div>
    </div>
  )
}

export default ProjectDispCard