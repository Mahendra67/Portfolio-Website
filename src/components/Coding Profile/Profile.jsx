import React from 'react'
import './Profile.css'
import {Link} from 'react-router-dom'

const Profile = (props) => {

  return (
    <div className="profile__container__1">
        <div className="profile_img_container" >
            <div className="blurOverlay">
                <img className="profile_img__1" src={props.cardInfo.siteImg} />
            </div>
        </div>
        <div className="nameContainer">{props.cardInfo.name}</div>
        <div className="profile__desc_container">
            {/* <div className="siteInfo">{props.cardInfo.desc}</div> */}
            <div className="siteMaxRating">Max-Rating : {props.cardInfo.maxRating}</div>
        </div>
        <div className="profile__link_container">
          <div className="linkText">
            <Link to={props.cardInfo.link} target="_blank" className="profile__link_name">Link</Link>
          </div>
          <div className="linkArrowSym">&#8680;</div>
        </div>
    </div>
  )
}

export default Profile