import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../stories/fakeStyle.css";
import { Card } from "../index";
import {ThemeContext} from "../../index";

export default {
  title: "Componentes/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: `**Este componente tiene 5 argumentos obligatorios _description_, _cardType_, _txtBtn_ y _iconName_.**\
        
        Descripcion de argumentos: (Ver introducción para conocer las clases que usted debe agregar a su proyecto)\
        
        **_description_**: (string)   
        **_cardType_**: ( _mod_ | _app_)   
        **_txtBtn_**: (string).   
        **_iconName_**: (string)    
        **_iconColor_**: (string)   
        **_infoIcon_**: (string)     
        **_className_**: (string)
        **_hasShadow_**: (boolean)   
        **_onClick_**: (Funcion).
        `,
      },
    },
  },
} as ComponentMeta<typeof Card>;

const showAlert=()=>alert('click')
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
const themeDefaultValues = {
  primaryColor: "red",
  secundaryColor: "#8b96ad",
  CTAColor: "linear-gradient(-147deg,rgba(244, 132, 39, 1) 2%,rgba(238, 62, 150, 1) 86%)",
  lightBg: "#e8f1ff"
}
export const Types = () => (
  <ThemeContext.Provider value={themeDefaultValues}>
    <div style={{display: "flex", "justifyContent":"space-evenly"}}>
    <Card cardType= "mod" description= "Administración General" txtBtn= "Administrar"
  iconName= "icon-admin"
  onClick={showAlert}
  hasShadow={true}
  infoIcon= "icon-tip"
  infoText=
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
     <Card cardType= "app" description= "Puntos de venta" txtBtn= "Administrar"
  iconName= "icon-sales"
  iconColor=
    "linear-gradient(90deg, rgba(2,7,104,1) 0%, rgba(13,97,174,1) 100%)"
  hasShadow={false}
  infoIcon= "icon-tip"
  infoText=
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "/>
    </div>
   
  </ThemeContext.Provider>
);
