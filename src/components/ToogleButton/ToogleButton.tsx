import React,{useContext} from "react"
import { ToogleButtonType } from "./ToogleButton.types"
import "./ToogleButton.css"
import {ThemeContext} from "../Theme/ThemeContext";


const ToogleButton = ({value, text, colorTheme=false, checked}:ToogleButtonType) => {
  const themeC = useContext(ThemeContext);
  
  const inputDinamicColor = `
  .radio__toggle:checked::after {
    background-color: ${colorTheme==false ?"lightgreen" : themeC.primaryColor};
  }

  `
	return ( <>
    <style dangerouslySetInnerHTML={{__html:inputDinamicColor}} />
    <label className="radio__label" htmlFor={value}>
    <input className="radio__toggle" id={value} type="checkbox" checked={checked}/>
    <span className="radio__span">
      {text}
    </span>
  </label>

	</>)
}



export default ToogleButton
