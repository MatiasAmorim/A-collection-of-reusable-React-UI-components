import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../stories/fakeStyle.css";
import { Card } from "../index";

export default {
  title: "Componentes/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Modulos = Template.bind({});
Modulos.args = {
  type: "mod",
  description: "Administración General",
  txtBtn: "Administrar",
  iconName: "icon-admin",
  iconColor:
    "linear-gradient(90deg, rgba(2,7,104,1) 0%, rgba(13,97,174,1) 100%)",
  hasShadow: true,
  infoIcon: "icon-tip",
  infoText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
};

export const Apps = Template.bind({});
Apps.args = {
  type: "app",
  description: "Puntos de venta",
  txtBtn: "Administrar",
  iconName: "icon-sales",
  iconColor:
    "linear-gradient(90deg, rgba(2,7,104,1) 0%, rgba(13,97,174,1) 100%)",
  bg: "#e8f1ff",
  hasShadow: false,
  infoIcon: "icon-tip",
  infoText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
};
