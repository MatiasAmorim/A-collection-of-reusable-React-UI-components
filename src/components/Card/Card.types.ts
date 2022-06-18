


export type CardType = {
	description: string
	type: "mod" | "app"
	txtBtn: string //Text label for the button
	iconName: string //Personalized principal icon
	iconColor?: string //Change icon color
	infoIcon: string
  className?: string
	bg?: string //optional gackground color
	hasShadow?: boolean //Optional shadow for cards
	infoText: string //Text about the infomation of the card
	
}
