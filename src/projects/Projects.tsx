import React, {useState} from "react";
import cl from "./Projects.module.css"
import containerStyle from "../common/styles/Container.module.css"
import titleStyle from "../common/styles/Container.module.css"
import {Project} from "./project/Project";
import {v1} from "uuid";
import shelter from "../access/img/shelter-dog.jpg"
import bookShop from "../access/img/book-shop.jpg"
import socialNetwork from "../access/img/social-network.jpg"
import tracking from "../access/img/tracking.jpg"
import sectionCommon from "../common/styles/Container.module.css";

export type ProjectsType = {
    id:string
    img:string
    titleProject:string
}
export const Projects = () => {
    const [projects, SetProjects] = useState<ProjectsType[]>([
        {id:v1(),img:shelter,titleProject:'SHELTER'},
        {id:v1(),img:bookShop,titleProject:'BOOK SHOP'},
        {id:v1(),img:socialNetwork,titleProject:'APPLICATION FOR SOCIAL NETWORK '},
        {id:v1(),img:tracking,titleProject:'APPLICATION FOR TASK TRACING'},
    ])
    return (<div className={`${sectionCommon.section} ${cl.projects}`}>
            <div className={containerStyle.mainContainer}>
                <span className={titleStyle.title}>Projects</span>
                <h2 className={titleStyle.mainTitle}>Creative Projects</h2>
                <div className={cl.projectsSection}>
                    {projects.map(el => {
                       return (
                           <Project
                               key={el.id}
                               img={el.img}
                               titleProject={el.titleProject}
                               id={el.id}
                           />
                       )
                    })}
                </div>

            </div>
        </div>
    )
}