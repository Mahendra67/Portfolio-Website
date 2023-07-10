import React from 'react'
import { useState } from 'react'
import './Headbar.css'
import {Link} from 'react-router-dom'

const Headbar = () => {
  var [dropDownActive, setDropDownActive] = useState(false);

  function changeDropDownVis(){
    setDropDownActive(!dropDownActive);
  }

  return (
    <div className="headbarContainer">
        <div className="headbar">
          <div className="ProfilePhoto">
            <Link to="/" class="projects__link_home">
              MAHENDRA
            </Link>
          </div>
          <div className="RightHeadbar">
            <div className="projects">
              <Link to="/projects" className="projects__link_projects">PROJECTS</Link>
            </div>
            {/* <div className="contact_page">
              <Link to="/contact" >Contact</Link>
            </div> */}
            <div className="resume">
              <Link className="projects__link_resume" to="https://drive.google.com/file/d/1tttIP1fNME9W61y_Zkwg7VP85w4ipJPe/view" target="_blank">RESUME</Link>
            </div>
          </div>
          <div className="dropDownBtn" onClick={changeDropDownVis}>
              {dropDownActive? "CLOSE": "MORE"}
          </div>
        </div>
        {dropDownActive? 
          <div className="dropDown">
              <div className="dropDownContainer">
                <div className="actualDropDown">
                  <div className="home__container">
                    <Link to="/" className="dropdown_home" onClick={changeDropDownVis}>HOME</Link>
                  </div>
                  <div className="projects__container">
                    <Link to="/projects" className="dropdown_projects" onClick={changeDropDownVis}>PROJECTS</Link>
                  </div>
                  <div className="resume__container">
                    <Link to="https://drive.google.com/file/d/1tttIP1fNME9W61y_Zkwg7VP85w4ipJPe/view" target="_blank" className="dropdown_resume">RESUME</Link>
                  </div>
                  <div className="linkedin__container">
                    <Link to="https://in.linkedin.com/in/mahendra-majhi-319360203" target="_blank" className="dropdown_linkedin">LINKEDIN</Link>
                  </div>
                </div>
              </div>
          </div>
        : null}
    </div>
  )
}

export default Headbar