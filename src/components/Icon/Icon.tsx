import React from "react"
import { IconType } from "./Icon.types"
import "./Icon.css"

const Button= ({ color, name, size="md", onClick, classes, bgColor, shape="circle"} : IconType) => {
	return (
		<div className={`icon_container ${shape}`} style={{
			background: bgColor
		}}>
			<span 
				className={`${name} ${classes} ${`icon_${size}`}`}
				onClick={onClick}
				style={{
					color: color,
				}}
			></span>
		</div>
		
	)
}

export default Button
