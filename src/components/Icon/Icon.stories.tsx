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
        component: `**Este componente tiene 2 argumentos obligatorios _Iname_ y _Icolor_.**\
        
        Descripcion de argumentos: (Ver introducción para conocer las clases que usted debe agregar a su proyecto)\
        
        **_Iname_**: (string) Nombre de clase para generar el icomoon.  
        **_Icolor_**: (string) Color de icono.   
        **_Isize_**: (_sm_: Icono small. _md_: Valor por defecto icono mediano. _lg_: Icono grande)  
        **_Iclasses_**: (string) Clases adicionales.   
        **_IbgColor_**: (string) color de fondo para el icono.  
        **_Ishape_**: ( _circle_: Fondo circulo. _square_: Fondo cuadrado) Forma para el fondo en caso de que lo requiera.   
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


export const Sizes = () => (<>
    <Icon Icolor="rgba(0, 0, 255, 1)" Iname="icon-home" Isize="sm" onClick={showAlert}/>
    <Icon Icolor="rgba(0, 0, 255, 1)" Iname="icon-home" Isize="md" onClick={showAlert}/>
    <Icon Icolor="rgba(0, 0, 255, 1)" Iname="icon-home" Isize="lg" onClick={showAlert}/>
</>);

export const WithBackground = () => (<>
  <Icon Icolor="#FFF" Iname="icon-home"  IbgColor="tomato"/>
  <br/>
  <Icon Icolor="#FFF" Iname="icon-home"  IbgColor="tomato" Ishape="square"/>
</>);