import React from "react";
import useInput from './utils/useInput'


const Form = () => {
const name = useInput('text','name', "name")
const email = useInput('email','email', "email")
  return (
    <div>
      <form>
        <input {...name} />
        <input {...email} />
        <input type='submit' value="send"/>
      </form>
    </div>
  );
};

export default Form;
