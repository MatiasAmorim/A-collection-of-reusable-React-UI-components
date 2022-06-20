import React from 'react'

interface themeObj{
    primaryColor: string;
   secundaryColor:string;
    CTAColor: string;
    lightBg?:string;
}

const themeDefaultValues: themeObj = {
  primaryColor: "red",
  secundaryColor: "#8b96ad",
  CTAColor: "linear-gradient(-147deg,rgba(244, 132, 39, 1) 2%,rgba(238, 62, 150, 1) 86%)",

}
export const ThemeContext = React.createContext<themeObj>(themeDefaultValues)
