import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../stories/fakeStyle.css";
import { ToogleButton } from "../index";
import {ThemeContext} from "../../index";


export default {
  title: "Componentes/ToogleButton",
  component: ToogleButton,
  parameters: {
    docs: {
      description: {
        component: `**Este componente tiene 2 argumentos obligatorios _value_ y _text_.**\
        
        Descripcion de argumentos: (Ver introducción para conocer las clases que usted debe agregar a su proyecto)\
        
        **_value_**: (string) Valor del elemento (value, name, htmlFor).  
        **_text_**: (string) Texto descriptivo en el botón.   
        **_colorTheme_**: (boolean) Quitar el color por defecto y agregar el del tema.   
        **_checked_**: (boolean)
        `,
      },
    },
  },

} as ComponentMeta<typeof ToogleButton>;


const Template: ComponentStory<typeof ToogleButton> = (args) => <ToogleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  value:"1015",
  text:"Gato"
};

export const ThemeColor = Template.bind({});
ThemeColor.args = {
  value:"1015",
  text:"Gato",
  colorTheme: true
};