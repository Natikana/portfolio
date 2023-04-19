import React from "react";
import cl from "./Project.module.scss"
import {ProjectsType} from "../Projects";
import text from "../../common/styles/Common.module.scss"


export const Project = (props:ProjectsType) => {
    return (
            <div className={cl.project}>
                <a href={'#'} className={cl.link}>
                    <img className={cl.projectImg} src={props.img} alt={props.titleProject}/>
                    <span className={text.generelText}>{props.titleProject}</span>
                </a>
            </div>

    )
}