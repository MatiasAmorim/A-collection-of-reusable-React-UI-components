import React, {useContext} from "react";
import "./Input.css";
import { InputType } from "./Input.types";
import {ThemeContext} from "../Theme/ThemeContext";


const Input = ({ text, type="text", requiredMsg, errorMgs, hasError=false, isEmpty=false}: InputType) => {
	const themeC = useContext(ThemeContext);
  const dinamicStyle= `
.floating__label::after {  
	background-color: ${themeC.primaryColor};
}
.floating__input:focus + .floating__label::before {
	color:  ${themeC.primaryColor};
}

.floating:hover .floating__input {
	border-color:  ${themeC.primaryColor};
}
.floating:hover  .floating__label::before 
{
  color:  ${themeC.primaryColor};
}
`

  return (<>
  

    <div className="floating" >
      <style dangerouslySetInnerHTML={{__html:dinamicStyle}} />
      
      <input className="floating__input" name={"input__"+text} type={type} placeholder={text} 
      style={{
        caretColor : themeC.primaryColor
      }}/>
      <label htmlFor={"input__"+text} className="floating__label" data-content={text}>
        <span className="hidden--visually">
        {text}</span>
      </label>
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
