import React from 'react'
import './QAns.css'

const QAns = (props) => {

  const classes = ["fieldContainer"];

  if(props.change === true){
    classes.push("messageDimension");
  }

  const updateMsgInfo = (event) => {
    props.updateMsg(event.target.value);
  }

  const updateAns = (event) => {
    if(props.Ques === "NAME"){
      props.updateName(event.target.value);
    }else if(props.Ques === "EMAIL ADDRESS"){
      props.updateEmail(event.target.value);
    }
  }

  return (
    <div className={classes.join(" ")} >
        <div className="quesContainer">{props.Ques}</div>
        {props.change == 1 ? 
          <textarea 
            onChange={updateMsgInfo} 
            className="messageContainer" 
            placeholder={props.ans}
            value={props.userMsg}
            >
          </textarea> 
          : 
          <input 
            type="text" 
            onChange={updateAns} 
            value={(props.Ques === "NAME")? props.userName : props.userEmail} 
            className="ansFieldContainer" 
            placeholder={props.ans}/>
        }
    </div>
  )
}

export default QAns