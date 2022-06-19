import React from "react"
import { ButtonType } from "./Button.types"
import "./Button.css"


const Button = ({label, size="md", bgColor, onClick, classes="", rounded="hard", isDisabled}:ButtonType) => {

	return (
		<button
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
	)
}



export default Button
