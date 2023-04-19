import React from "react";
import cl from "./Main.module.scss"
import {AboutMe} from "./aboutMe/AboutMe";
import containerStyle from "../common/styles/Common.module.scss"

export const Main = () => {
    return (<div className={cl.main}>
            <div className={containerStyle.mainContainer}>
                <AboutMe/>
            </div>
        </div>
    )
}