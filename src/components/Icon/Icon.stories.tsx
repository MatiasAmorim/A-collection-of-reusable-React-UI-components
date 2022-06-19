import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../stories/fakeStyle.css";
import { Icon } from "../index";

export default {
  title: "Componentes/Icon",
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: `**Este componente tiene 2 argumentos obligatorios _name_ y _color_.**\
        
        Descripcion de argumentos: (Ver introducción para conocer las clases que usted debe agregar a su proyecto)\
        
        **_name_**: (string) Nombre de clase para generar el icomoon.  
        **_color_**: (string) Color de icono.   
        **_size_**: (_sm_: Icono small. _md_: Valor por defecto icono mediano. _lg_: Icono grande)  
        **_classes_**: (string) Clases adicionales.   
        **_bgColor_**: (string) color de fondo para el icono.  
        **_shape_**: ( _circle_: Fondo circulo. _square_: Fondo cuadrado) Forma para el fondo en caso de que lo requiera.   
        **_onClick_**: (Funcion). 
        `,
      },
    },
  },
  argTypes: {
  size: {
    options: ['lg', 'md', 'sm'],
    control: { type: 'radio' },
  },
  bgColor: { control: 'color' }
  }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

const showAlert=()=> alert("click icon")

export const Default = Template.bind({});
Default.args = {
  color:"rgba(0, 0, 255, 1)", 
  name: "icon-home", 
  onClick: showAlert
};

export const Small = Template.bind({});
Small.args = {
  color:"rgba(0, 0, 255, 1)", 
  name: "icon-home", 
  size: "sm"
};

export const Large = Template.bind({});
Large.args = {
  color:"rgba(0, 0, 255, 1)", 
  name: "icon-home", 
  size: "lg"
};

export const CircleBackgroundDefault = Template.bind({});
CircleBackgroundDefault.args = {
  color:"white", 
  name: "icon-home", 
  bgColor: "rgba(0, 0, 255, 1)"
};

export const SqureBackground = Template.bind({});
SqureBackground.args = {
  color:"white", 
  name: "icon-home", 
  shape: "square",
  bgColor: "tomato"

};