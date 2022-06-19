import React from "react"
import { ButtonType } from "./Button.types"
import "./Button.css"

import useTheme from "../Theme/Theme";

const Button = ({label, size="md", bgColor, onClick, classes="", rounded="hard", isDisabled}:ButtonType) => {
const { themeC }= useTheme();
	return (
		<button
			className={`button
						${classes}
						${`button_${size}`}
						${`button_${rounded}`}
						${isDisabled?"disabled": ""}
						${bgColor=="link"? "txt_primary": ""}
					`}
			onClick={onClick}
			disabled={isDisabled ?? false}
			style={{background: themeC.primaryColor}}>
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
