import React from 'react';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import cl from "./App.module.css"
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Freelance} from "./freelance/Freelance";
import {Contact} from "./contact/Contact";

function App() {
    return (
        <div className={cl.app}>
            <Header/>
            <div className={cl.section}>
                <Main/>
                <Skills/>
                <Projects/>
                <Freelance/>
                <Contact/>
            </div>
        </div>
    )

}

export default App;
