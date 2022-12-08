import React from "react";
import {useState} from 'react';
import useInput from './utils/useInput'


const Form = () => {
console.log(useInput())
const name = useInput()
const email = useInput()
  return (
    <div>
      <form>
        <input type='text' placeholder="name" name="name" value={name.value} onChange={name.onChange} />
        <input type='email' placeholder="email" name="email" value={email.value} onChange={email.onChange}/>
        <input type='submit' value="send"/>
      </form>
    </div>
  );
};

export default Form;
