import React, {useContext} from "react";
import "./Input.css";
import { InputType } from "./Input.types";
import {ThemeContext} from "../Theme/ThemeContext";
import styled from 'styled-components';


const Input = ({ text, type="text", requiredMsg, errorMgs, hasError=false, isEmpty=false}: InputType) => {
	const themeC = useContext(ThemeContext);

  const Div = styled.div`
  &:hover .floating__input {
    border-color:  ${themeC.primaryColor};
  }
  &:hover  .floating__label::before 
{
  color:  ${themeC.primaryColor};
}
  `;

  const Input = styled.input`
  &::after {  
    background-color: ${themeC.primaryColor};
  }
  &:focus + &::before {
    color:  ${themeC.primaryColor};
  }

`;


  return (<>  

    <Div className="floating" >
      
      <Input className="floating__input" name={"input__"+text} type={type} placeholder={text} 
      style={{
        caretColor : themeC.primaryColor
      }}/>
      <label htmlFor={"input__"+text} className="floating__label" data-content={text}>
        <span className="hidden--visually">
        {text}</span>
      </label>
    </Div>
   <div className="msgrcl_input">
      <small className="message">
        {isEmpty? requiredMsg: null}
        { hasError? errorMgs:null}
      </small>
   </div>
 </> );
};

export default Input;
