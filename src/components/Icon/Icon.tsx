import React from "react"
import { IconType } from "./Icon.types"
import "./Icon.css"

const Button: React.FC<IconType> = (props) => {
	const { color, name, size, onClick, otherClass, bgColor} = props;
	return (
		<div className="icon_container" style={{
			background: bgColor
		}}>
			<span className={`${
			name} ${
			otherClass} ${
			size ? `icon-${size}` : ""}`}
			onClick={onClick}
			style={{
				background: color,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
			}}
			></span>
		</div>
		
	)
}

export default Button
