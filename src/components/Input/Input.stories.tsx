import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../stories/fakeStyle.css";
import { Input } from "../index";
import {ThemeContext} from "../../index";

export default {
  title: "Componentes/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `**Este componente tiene 3 argumentos obligatorios _text_, _requiredMsg_ y _errorMgs_.**\    
        Descripcion de argumentos: (Ver introducción para conocer las clases que usted debe agregar a su proyecto)\
        
        **_text_**: (string) Descripcion para el placeholder.  
        **_requiredMsg_**: (string) Mensaje para mostrar si en caso de esta vacio siendo required.   
        **_errorMgs_**: (string)  Mensaje a mostrar si los datos no cumplen con lo esperado.   
        **_type_**: (string) Input type.        
        **_hasError_**: (boolean)   
        **_isEmpty_**: (boolean)  
        `,
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

const themeDefaultValues = {
  primaryColor: "red",
  secundaryColor: "#8b96ad",
  CTAColor: "linear-gradient(-147deg,rgba(244, 132, 39, 1) 2%,rgba(238, 62, 150, 1) 86%)",
}

export const InputElement = () => (
  <ThemeContext.Provider value={themeDefaultValues}>
    <Input text="Correo" requiredMsg="Por favor colocar el correo" errorMgs="Debe ingresar un correo valido"/>
  </ThemeContext.Provider>
);




export const InputEmpty = Template.bind({});
InputEmpty.args = {
   text:"correo",
   requiredMsg: "Por favor colocar el correo",
   isEmpty: true
};


export const InputError = Template.bind({});
InputError.args = {
   text:"correo",
   errorMgs: "Debe ingresar un correo valido",
   hasError: true
};