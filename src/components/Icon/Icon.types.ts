import { MouseEventHandler } from "react"

export type IconType = {
	name: string
	color: string
	size?: "lg" | "md" | "sm"
	bgColor?: string //set backgound to the icon and color
	shape?: "circle" | "square" 
	onClick?: MouseEventHandler
	classes?: string //Alow to set personalized classes
} 