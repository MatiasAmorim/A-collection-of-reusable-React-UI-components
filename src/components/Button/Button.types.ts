import { MouseEventHandler } from "react"

export type ButtonType = {
	label: string
	size: "lg" | "md" | "sm"
	btnType: "primary" | "secondary" | "CTA" | "personalized"
	onClick?: MouseEventHandler<HTMLButtonElement>
	//rounded?: "soft" | "hard"
	isDisabled?: boolean
	className?: string
//	styles?: object
}
