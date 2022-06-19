import React, {useState, useEffect} from 'react'

interface themeObj{
  primaryColor: string;
 secundaryColor:string;
  CTAColor: string;
}
const themeDefaultValues = {
      primaryColor: "#0d61ae",
      secundaryColor: "#8b96ad",
      CTAColor: "linear-gradient(-147deg,rgba(244, 132, 39, 1) 2%,rgba(238, 62, 150, 1) 86%)"
}
function useTheme() {

  const [themeC, setThemeC] = useState(themeDefaultValues);

  const saveTheme = (themeVal:Partial<themeObj>) =>{
    setThemeC(oldValue => ({
      ...oldValue,
      ...themeVal
    }));
  }


  return {themeC, saveTheme};

}

export default useTheme;

/*
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

*/