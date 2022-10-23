import {createGlobalStyle} from "styled-components";

const darkTheme = {
    body: "#000",
    textColor: "#fff",
    headingColor: "#fff"

}
const lightTheme = {
    body: "#f1e7d7",
    textColor: "#4b2d2d",
    headingColor: "#d23669",

}

const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 h2{
   color: ${props => props.theme.headingColor};   
 }
 div{
    background: ${props => props.theme.body};   
 }
 

`

export {
    darkTheme,
    lightTheme,
    GlobalStyles
}