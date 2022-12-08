import React, { useState } from "react";
import useInput from './utils/useInput'


const Form = () => {
const name = useInput('text','name', "name")
const email = useInput('email','email', "email")
const [msg, setMsg] = useState();
const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)
const validName = /^.{5,}$/.test(name.value)
console.log(name.value);

const onClick = (e) =>{
  e.preventDefault();
  if(validEmail && validName){
    setMsg(`Thanks ${name.value} our team will contact you soon!`)
  } else{
    setMsg('Error pelotuda')
  }
}
  return (
    <div className="form">
      <form>
        <input {...name} />
        <input {...email} />
        <input type='submit' value="send" onClick={onClick}/>
        <p>{msg}</p>
      </form>
    </div>
  );
};

export default Form;
