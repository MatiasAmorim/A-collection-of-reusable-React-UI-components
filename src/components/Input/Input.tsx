import React from "react";
import "./Input.css";
import { InputType } from "./Input.types";

const Input = ({ text, type="text", requiredMsg, errorMgs, hasError=false, isEmpty=false}: InputType) => {

  return (<>
  
    <div className="floating">
      <input className="floating__input" name={text} type={type} placeholder={text} />
      <label htmlFor="input__username" className="floating__label" data-content={text}>
      <span className="hidden--visually">
        {text}</span></label>
    </div>
   <div className="msgrcl_input">
      <small className="message">
        {isEmpty? requiredMsg: null}
        { hasError? errorMgs:null}
      </small>
   </div>
 </> );
};

export default Input;
