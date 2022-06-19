import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../stories/fakeStyle.css";
import { Checkbox } from "../index";


export default {
  title: "Componentes/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `**Este componente tiene 2 argumentos obligatorios _label_ y _bgColor_.**\
        
        Descripcion de argumentos: (Ver introducción para conocer las clases que usted debe agregar a su proyecto)\
        
        **_label_**: (string) Texto descriptivo en el botón.  
        **_bgColor_**: (_primary_: Boton primario. _secondary_: Boton secundario. _CTA_: Boton Call To Action.  _link_: Boton link.) Color de fondo.   
        **_onClick_**: (Funcion).   
        **_size_**: (_sm_: Boton small. _md_: Valor por defecto boton mediano. _lg_: Boton grande)
        **_classes_**: (string) Clases adicionales.   
        **_rounded_**: (_"none"_ | _"soft"_ | _"hard"_) Borde para el boton.  
        **_isDisabled_**: (boolean) Desabilita el boton.  
        `,
      },
    },
  },

} as ComponentMeta<typeof Checkbox>;


const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const CheckBoxExample = Template.bind({});
CheckBoxExample.args = {
  label:"Primary Button", 
  bgColor:"primary", 
};
