
import { ButtonType } from "../Button/Button.types";

export interface CardType extends Pick<ButtonType, "onClick" > {
	description: string
	cardType: "mod" | "app"
	txtBtn: string //Text label for the button
	iconName: string //Personalized principal icon
	iconColor?: string //Change icon color
	infoIcon: string
  className?: string
	hasShadow?: boolean //Optional shadow for cards
	infoText: string //Text about the infomation of the card
	
}
