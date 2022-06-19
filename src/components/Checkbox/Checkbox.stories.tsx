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

export const Primary = Template.bind({});
Primary.args = {
  label:"Primary Button", 
  bgColor:"primary", 
};

export const Secondary = Template.bind({});
Secondary.args = {
  label:"Secondary Button", 
  bgColor:"secondary", 
};

export const CTA = Template.bind({});
CTA.args = {
  label:"CTA Button", 
  bgColor:"CTA", 
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  label:"Small Size Button", 
  bgColor:"primary",
  size: "sm"
};
export const DefaultSize = Template.bind({});
DefaultSize.args = {
  label:"Medium Size Button", 
  bgColor:"primary",
};
export const LargeSize = Template.bind({});
LargeSize.args = {
  label:"Large Size Button", 
  bgColor:"primary", 
  size:"lg"
};
export const BorderSoft = Template.bind({});
BorderSoft.args = {
  label:"Soft border Button", 
  bgColor:"primary", 
  rounded:"soft",
};
export const BorderDefault= Template.bind({});
BorderDefault.args = {
  label:"Hard border Button", 
  bgColor:"primary", 
};
export const BorderNone= Template.bind({});
BorderNone.args = {
  label:"None border Button", 
  bgColor:"primary", 
  rounded:"none",
};

