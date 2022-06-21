import React,{useContext} from "react"
import { ToogleButtonType } from "./ToogleButton.types"
import "./ToogleButton.css"
import {ThemeContext} from "../Theme/ThemeContext";
import styled from 'styled-components';


const ToogleButton = ({value, text, colorTheme=false, checked}:ToogleButtonType) => {
  const themeC = useContext(ThemeContext);
  const Input = styled.input`
  &:checked::after {
    background-color: ${colorTheme==false ?"lightgreen" : themeC.primaryColor};
  }
  `;

	return ( <>
    <label className="radio__label" htmlFor={value}>
    <Input className="radio__toggle" id={value} type="checkbox" checked={checked}/>
    <span className="radio__span">
      {text}
    </span>
  </label>

	</>)
}



export default ToogleButton
