import React from "react";
import cl from "./Project.module.css"
import {ProjectsType} from "../Projects";
import text from "../../common/styles/Container.module.css"


export const Project = (props:ProjectsType) => {
    return (
            <div className={cl.project}>
                <a href={'#'} className={cl.link}>
                    <img src={props.img}  width={'400px'} height={'260px'} alt={'dog'}/>
                </a>
                <span className={text.generelText}>{props.titleProject}</span>
            </div>

    )
}