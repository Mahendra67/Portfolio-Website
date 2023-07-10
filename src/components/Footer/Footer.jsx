import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
  // const currDate = new Date();
  const currYear = new Date().getFullYear();

  function emailClickHandler(){
    window.open("mailto:your-email@example.com");
  }

  return (
    <div className='footerContainer'>
      <div className="footerInfoContainer">
        <div className="SocialMediaAccount">Reach out for collaboration at</div>
        <div className="gmailAdd" onClick={emailClickHandler}>mahendramajhi53@gmail.com</div>
        <div className="copyright">
          &#169; 2023-{currYear} Mahendra Majhi. Some Rights Reserved.
        </div>
        <div className="copyrightSmall">
            &#169; 2023-{currYear} Mahendra Majhi.
        </div>
        <div className="rightsSection">Some Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Footer