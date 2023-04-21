import React from "react";
import cl from "./Main.module.scss"
import {AboutMe} from "./aboutMe/AboutMe";


export const Main = () => {

    return (<div className={cl.main}>
            <AboutMe/>
        </div>
    )
}