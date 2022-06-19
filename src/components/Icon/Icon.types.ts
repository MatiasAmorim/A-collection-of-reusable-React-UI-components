import { MouseEventHandler } from "react"

export type IconType = {
	Iname: string
	Icolor: string
	Isize?: "lg" | "md" | "sm"
	IbgColor?: string //set backgound to the icon and color
	Ishape?: "circle" | "square" 
	onClick?: MouseEventHandler
	Iclasses?: string //Alow to set personalized classes
} 