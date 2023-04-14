import React from "react";
import cl from "./Main.module.css"
import {AboutMe} from "./aboutMe/AboutMe";
import containerStyle from "../common/styles/Container.module.css"

export const Main = () => {
    return (<div className={cl.main}>
            <div className={containerStyle.mainContainer}>
                <AboutMe/>
            </div>
        </div>
    )
}