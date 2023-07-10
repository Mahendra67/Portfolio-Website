import React, {useState} from 'react'
import './ContactPage.css'
import Form from './Form.jsx'

const ContactPage = () => {

  const [msgSent, setMsgSent] = useState(false);

  return (
    <div className="contactCC">
        <div className="ContactPageContainer">
          <div className="contactContainer">
            <div className="leftContainer">
              {msgSent ? "Message Sent, thank you for reaching out!" : "Left Container"}
            </div>
            <div className="rightContainer">
              <Form updateMsgSent={setMsgSent}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactPage