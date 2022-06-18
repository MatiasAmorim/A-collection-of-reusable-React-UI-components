import React from "react"
import { ButtonType } from "./Button.types"
import "./Button.css"

const Button: React.FC<ButtonType> = (props) => {
	const { label, className, btnType, onClick, size, isDisabled } =
		props
	return (
		<button
			className={`button
						${className ? className : null}
						${btnType ? `button-${btnType}` : null}
						${size ? `button-${size}` : null}
						${isDisabled === true ? "disabled" : null}
					`}
			disabled={isDisabled ?? false}
			onClick={onClick}>
			{label}
		</button>
	)
}

export default Button
