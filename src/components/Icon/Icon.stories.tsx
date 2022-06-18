import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../stories/fakeStyle.css";
import { Icon } from "../index";

export default {
  title: "Componentes/Icon",
  component: Icon,
  argTypes: {
  size: {
    options: ['lg', 'md', 'sm'],
    control: { type: 'radio' },
  },
  }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

const showAlert=()=> alert("click icon")

export const Primary = Template.bind({});
Primary.args = {
  color:"rgba(0, 0, 255, 1)", 
  name: "icon-admin", 
  size:"md",
  onClick: showAlert
};
