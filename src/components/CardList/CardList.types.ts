
import { MouseEventHandler } from "react"
import { IconType } from "../Icon/Icon.types"

export interface CardListType extends Omit<IconType, 'size'>
{
	label: string
    labelColor: string
    iconName:string
    otherClass?:string
    onClick?: MouseEventHandler
	bgCardListColor:string
}


