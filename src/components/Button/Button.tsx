import React, { useContext, useEffect, useState } from "react"
import { ButtonType } from "./Button.types"
import "./Button.css"
import styled from 'styled-components';

import {ThemeContext} from "../Theme/ThemeContext";

const Button = ({label, size="md", btnType, onClick, classes="", rounded="hard", isDisabled}:ButtonType) => {
	const themeC = useContext(ThemeContext);

	const Button = styled.button`
		background: ${(btnType== "primary") ? themeC.primaryColor 
		: (btnType== "secondary") ? themeC.secundaryColor : themeC.CTAColor}
	`;
  
	return (
		<Button
			className={`button ${classes} ${`button_${size}`} ${`button_${rounded}`} ${isDisabled?"disabled": ""}`}
			onClick={onClick}
			disabled={isDisabled ?? false}
		>
			{label}
		</Button>
	)
}

export default Button
