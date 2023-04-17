import React from "react";
import cl from "./Project.module.css"
import {ProjectsType} from "../Projects";
import text from "../../common/styles/Container.module.css"


export const Project = (props:ProjectsType) => {
    return (
            <div className={cl.project}>
                <img className={cl.projectImg} src={props.img} alt={'dog'}/>
                <a href={'#'} className={cl.link}>
                    <span className={text.generelText}>{props.titleProject}</span>
                </a>

            </div>

    )
}