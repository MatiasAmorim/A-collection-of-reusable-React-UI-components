import React from "react"
import { CheckboxType } from "./Checkbox.types"
import "./Checkbox.css"


const Button = ({label, size="md", bgColor, onClick, classes="", rounded="hard", isDisabled}:CheckboxType) => {

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
