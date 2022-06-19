import React, {useState} from 'react'

interface Props {
    children?: JSX.Element
}
interface themeObj{
    primaryColor: string;
   secundaryColor:string;
    CTAColor: string;
}
interface ITthemeContext{
    themeC: themeObj;
    setThemeC: (theme: themeObj) => void;
}

const themeDefaultValues: ITthemeContext = {
    themeC: {
        primaryColor: "#0d61ae",
        secundaryColor: "#8b96ad",
        CTAColor: "linear-gradient(-147deg,rgba(244, 132, 39, 1) 2%,rgba(238, 62, 150, 1) 86%)"
    },
    setThemeC: () => {},
}
export const Theme = React.createContext<ITthemeContext>(themeDefaultValues)


function ThemeContextProvider({children} : Props){
  const [themeC ,setThemeC] = useState<themeObj>(themeDefaultValues.themeC)
  return (
    <Theme.Provider value={{themeC, setThemeC}}>
      {children  as JSX.Element}
    </Theme.Provider>
  )
}

export default ThemeContextProvider ;

