import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../stories/fakeStyle.css";
import { CardList } from "../index";

export default {
  title: "Componentes/CardList",
  component: CardList,
  argTypes: {   
     backgroundColor: { control: "text" },
    label: { control: "text" },
  iconName: { control: "text" },
  },
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => <CardList {...args} />;

const handleClick= ()=>alert('hola')

export const Card = Template.bind({});
Card.args = {
    label: "Reporteria de puntos de venta",
    iconName: 'icon-taggle',
    onClick: handleClick,
    bgCardListColor:"#e8f1ff",
    labelColor: "#0e1d3a"
};
