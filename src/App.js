import React from "react";
import About from "./about/About";
import "./App.css";
import { Contact } from "./contact/Contact";
import Intro from "./Intro/Intro";
import Toggle from "./toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";
import Skills from "./skills/Skills";

const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return ( <
        div style = {
            {
                transition: "1S ease-out",
                backgroundColor: darkMode ? "#222" : "white",
                color: darkMode && "white",
            }
        } >
        <
        Toggle / >
        <
        Intro / >
        <
        About / >
        <
        Skills / >
        <
        Contact / >
        <
        /div>
    );
};

export default App;