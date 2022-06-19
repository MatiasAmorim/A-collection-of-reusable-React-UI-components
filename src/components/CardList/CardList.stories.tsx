import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../stories/fakeStyle.css";
import { CardList } from "../index";

export default {
  title: "Componentes/CardList",
  component: CardList,
  parameters: {
    docs: {
      description: {
        component: `**Este componente tiene 2 argumentos obligatorios _CLlabel_ y _CLcolor_.**\
        
        Descripcion de argumentos: (Ver introducción para conocer las clases que usted debe agregar a su proyecto)\
        
        **_Iname_**: (string) Nombre de clase para generar el icomoon.  
        **_Icolor_**: (string) Color de icono.   
        **_CLlabel_**: (string)  Texto a mostrar.   
        **_CLcolor_**: (string) Texto color.   
        **_ CLclasses_**: (string) Clases adicionales.  
        **_CLbgColor_**: ( string) Color del fondo.   
        **_onClick_**: (Funcion). 
        `,
      },
    },
  },
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => <CardList {...args} />;

const handleClick= ()=>alert('hola')

export const Card = Template.bind({});
Card.args = {
    CLlabel: "Reporteria de puntos de venta",
    onClick: handleClick,
    CLbgColor:"#e8f1ff",
    CLcolor: "#0e1d3a"
};
