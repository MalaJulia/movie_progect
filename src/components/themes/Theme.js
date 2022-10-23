import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "./Themes";

import {useState} from "react";



const Theme = () => {
const [theme, setTheme] = useState("light");

const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");

}
return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className={'header'}>
            <button className={"click"} onClick={switchTheme}>Switch</button>
        </div>
    </ThemeProvider>
);
}
export {
    Theme
}