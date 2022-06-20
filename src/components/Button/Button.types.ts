import { MouseEventHandler } from "react"



export type ButtonType = {
	label: string
	btnType: "primary" | "secondary" | "CTA" 
	size?: "lg" | "md" | "sm"
	onClick?: MouseEventHandler<HTMLButtonElement>
	classes?: string
	rounded?: "none"| "soft" | "hard"
	isDisabled?: boolean
	fondo?: string
}
