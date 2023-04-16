import React from "react";
import cl from "./Project.module.css"
import {ProjectsType} from "../Projects";
import text from "../../common/styles/Container.module.css"


export const Project = (props:ProjectsType) => {
    return (
            <div className={cl.project}>
                <a href={'#'} className={cl.link}>
                    <img className={cl.projectImg} src={props.img} alt={'dog'}/>
                </a>
                <span className={text.generelText}>{props.titleProject}</span>
            </div>

    )
}