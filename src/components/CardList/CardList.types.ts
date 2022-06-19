
import { MouseEventHandler } from "react"
import { IconType } from "../Icon/Icon.types"

export interface CardListType extends Pick<IconType, 'Iname' | "Icolor">
{
	CLlabel: string
    CLcolor: string
    CLclasses?:string
    onClick?: MouseEventHandler
	CLbgColor:string
}


