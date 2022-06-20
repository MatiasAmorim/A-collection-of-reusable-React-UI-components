import React, { useContext, useEffect, useState } from "react"
import { ButtonType } from "./Button.types"
import "./Button.css"

import {ThemeContext} from "../Theme/ThemeContext";

const Button = ({label, size="md", btnType, onClick, classes="", rounded="hard", isDisabled}:ButtonType) => {
	const themeC = useContext(ThemeContext);

	return (
		<button
			className={`button ${classes} ${`button_${size}`} ${`button_${rounded}`} ${isDisabled?"disabled": ""}`}
			onClick={onClick}
			disabled={isDisabled ?? false}
			style={{background: (btnType== "primary") ? themeC.primaryColor 
			: (btnType== "secondary") ? themeC.secundaryColor : themeC.CTAColor }}>
			{label}
		</button>
	)
}
/**
 * <button
			className={`button
						${classes}
						${`bg_${bgColor}`}
						${`button_${size}`}
						${`button_${rounded}`}
						${isDisabled?"disabled": ""}
						${bgColor=="link"? "txt_primary": ""}
					`}
			onClick={onClick}
			disabled={isDisabled ?? false}>
			{label}
		</button>
 */


export default Button
