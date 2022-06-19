import { IconType } from "../Icon/Icon.types"

interface iconos {
	
}
export interface DropdownType extends Pick<IconType, 'Iname' | "Iclasses" | "Isize">{
	DDlabel: string
	children: JSX.Element
	DDhovColor?: string
	DDcolor?:string
	DDclasses?: string
}

