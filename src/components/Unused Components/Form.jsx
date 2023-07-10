import React,{useState} from 'react'
import './Form.css'
import QAns from './QAns.jsx'

const Form = (props) => {
  const formDetails = [
    {
      ques: "NAME",
      placeholder: "Enter your name",
    },
    {
      ques: "EMAIL ADDRESS",
      placeholder: "Enter your email address",
    },
    {
      ques: "MESSAGE",
      placeholder: "Enter your message here",
    }
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');


  const groupDataHandler = (event) => {
    //Page will not reload
    event.preventDefault();

    //Errors
    var everythingValid = true;
    if(name.length == 0){
      console.log("name is not given");
      everythingValid = false;
    }
    
    if(msg.length == 0){
      console.log("msg is empty");
      everythingValid = false;
    }

    //Traverse through the email for validity
    var symbolFound = false;
    var valid = false;
    for(var i=0; i<email.length; i++){
      if(email[i] == "@" & i!=0){
        symbolFound = true;
        continue;
      }

      if(symbolFound){
          const tempEmailExt = email.substring(i, email.length);
          if(tempEmailExt === "gmail.com"){
            valid = true;
          }else{
            valid = false;
          }
          break;
      }
    }

    if(!valid){
      console.log("email id is not valid");
      return;
    }
    if(!everythingValid){
      return;
    }

    //Given data is valid

    const NewUserData = {
      userName: name,
      userEmail: email,
      userMessage: msg
    };

    //Reset the input values back to default
    setName('');
    setEmail('');
    setMsg('');

    //Invert bool as to update left container to Msg sent
    props.updateMsgSent(true);

    console.log(NewUserData);
  }

  return (
    <form className="form__container" onSubmit={groupDataHandler}>
      {
        formDetails.map((temp) => {
          var changeDimension = false;
          if(temp.ques === "MESSAGE"){
            changeDimension = true;
          }

          return <QAns 
                  Ques={temp.ques} 
                  ans={temp.placeholder}
                  change = {changeDimension}
                  userName = {name}
                  userEmail = {email}
                  userMsg = {msg}
                  updateName = {setName}
                  updateEmail = {setEmail}
                  updateMsg = {setMsg}
                  />
        })
      }
      <button type="submit" className="Submit__button">SEND MESSAGE</button>
    </form>
  );
}

export default Form