import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { theme: localStorage.getItem("mytheme")===null?"light":localStorage.getItem("mytheme")==="light"?"light":"dark"};
const reducer = (firstState, action) => {
switch (action.type) {
  case "CHANGE_THEME":
    return { ...firstState, theme: action.newValue };
  default:
    return firstState;
}}
 

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const changeTheme = (newtheme) => {
    localStorage.setItem("mytheme",newtheme)

    dispatch({ type: "CHANGE_THEME", newValue: newtheme });
  };


  return (
     <ThemeContexttt.Provider value={{ ...firstState, changeTheme }}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;