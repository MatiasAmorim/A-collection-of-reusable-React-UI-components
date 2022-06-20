import React from "react"
import { IconType } from "./Icon.types"
import "./Icon.css";


const Button= ({ Icolor, Iname, Isize="md", onClick, Iclasses, IbgColor, Ishape="circle"} : IconType) => {
	return (
		<span className={`icon_container ${Ishape}`} style={{
			background: IbgColor
		}}>
			<span 
				className={`${Iname} ${Iclasses} ${`icon_${Isize}`}`}
				onClick={onClick}
				style={{
					color: Icolor,
				}}
			></span>
		</span>
		
	)
}

export default Button
