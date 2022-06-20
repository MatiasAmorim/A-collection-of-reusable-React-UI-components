import React , {useContext} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../index";
import {ThemeContext} from "../../index";

export default {
  title: "Componentes/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `**Este componente tiene 2 argumentos obligatorios _label_ y _bnType_.**\
        
        Descripcion de argumentos: (Ver introducción para conocer las clases que usted debe agregar a su proyecto)\
        
        **_label_**: (string) Texto descriptivo en el botón.  
        **_bnType_**: (_primary_: Boton primario. _secondary_: Boton secundario. _CTA_: Boton Call To Action.  _link_: Boton link.) Color de fondo.   
        **_onClick_**: (Funcion).   
        **_size_**: (_sm_: Boton small. _md_: Valor por defecto boton mediano. _lg_: Boton grande)
        **_classes_**: (string) Clases adicionales.   
        **_rounded_**: (_"none"_ | _"soft"_ | _"hard"_) Borde para el boton.  
        **_isDisabled_**: (boolean) Desabilita el boton.  
        `,
      },
    },
  },

} as ComponentMeta<typeof Button>;
const themeDefaultValues = {
  primaryColor: "blue",
  secundaryColor: "#8b96ad",
  CTAColor: "linear-gradient(-147deg,rgba(244, 132, 39, 1) 2%,rgba(238, 62, 150, 1) 86%)"
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Types = () => (
  <ThemeContext.Provider value={themeDefaultValues}>
    <Button label="Primary Button" 
     bnType="primary"/>
    <Button label="Secondary Button" 
     bnType="secondary"/>
    <Button label="CTA Button" 
     bnType="CTA"/>
  </ThemeContext.Provider>
);

export const Size = () => (
  <ThemeContext.Provider value={themeDefaultValues}>
    <Button label="Small Size Button" 
     bnType="CTA" 
     size="sm"/>
     <Button label="Default Size Button" 
     bnType="CTA"/>
     <Button label="Large Size Button" 
     bnType="CTA" 
     size="lg"/>
  </ThemeContext.Provider>
);


export const Border = () => (
  <ThemeContext.Provider value={themeDefaultValues}>
    <Button label="Default Border Button" 
      bnType="primary" 
      rounded="hard"/>
     <Button label="Soft Size Button" 
      bnType="primary"
      rounded="soft"/>
     <Button label="None Size Button" 
      bnType="primary" 
      rounded="none"/>
  </ThemeContext.Provider>
);
