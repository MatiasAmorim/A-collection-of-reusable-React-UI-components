import { MouseEventHandler } from "react"

export type IconType = {
	size: "lg" | "md" | "sm"
	name: string
	color: string 
	onClick?: MouseEventHandler
	otherClass?: string //Alow to set personalized classes
	bgColor?: string //set backgound to the icon and color
} 