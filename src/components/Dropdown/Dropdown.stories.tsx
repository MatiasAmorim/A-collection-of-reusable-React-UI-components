import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../stories/fakeStyle.css";
import { Dropdown } from "../index";



export default {
  title: "Componentes/Dropdown Button",
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `**Este componente tiene 2 argumentos obligatorios _DDlabel_ y _children_.**\
        
        Descripcion de argumentos: (Ver introducción para conocer las clases que usted debe agregar a su proyecto)\
        
        **_children_**: (JSX) Lista de elemento a mostrar en el dropdown.   
        **_DDlabel_**: (string)  Texto a mostrar para darle click.   
        **_DDcolor_**: (string) Texto color.   
        **_DDclasses_**: (string) Clases adicionales.  
        **_DDhovColor_**: ( string) Color del fondo.  
        **_Iname_**: (string) Nombre de clase para generar el icomoon.  
        `,
      },
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

const modulos = [
  "Admin",
  "Canal Indirecto",
  "Altice",
  "Tecnicos Contratistas",
  "Analiticas",
];

export const DropDown = () => (
  <Dropdown DDlabel="MODULOS" DDcolor="#333" DDhovColor="#00ffd9" Iname="icon-home">
    <>
    {
      modulos.map((ele, i) => (
       <li key={"textDrop"+i}> <span className="DropmenuFakeElemen">{ele}</span> </li>
      ))
    }
    </>
  </Dropdown>
);