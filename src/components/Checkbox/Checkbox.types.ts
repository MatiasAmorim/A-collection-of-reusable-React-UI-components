import { MouseEventHandler } from "react"



export type CheckboxType = {
	label: string
	bgColor: "primary" | "secondary" | "CTA" | "link"
	size?: "lg" | "md" | "sm"
	onClick?: MouseEventHandler<HTMLButtonElement>
	classes?: string
	rounded?: "none"| "soft" | "hard"
	isDisabled?: boolean
}
