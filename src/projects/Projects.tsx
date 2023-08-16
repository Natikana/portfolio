import React, {useState} from "react";
import cl from "./Projects.module.scss"
import Fade from "react-reveal/Fade";
import {Project} from "./project/Project";
import {v1} from "uuid";
import shelter from "../access/img/shelter-dog.jpg"
import bookShop from "../access/img/book-shop.jpg"
import socialNetwork from "../access/img/social-network.jpg"
import flashCards from "../access/img/flashcards.png"
import tracking from "../access/img/tracking.jpg"
import sectionCommon from "../common/styles/Common.module.scss";
import {Title} from "../common/components/title/Title";

export type ProjectsType = {
    id: string
    img: string
    titleProject: string
    link: string
}
export const Projects = () => {
    const [projects, SetProjects] = useState<ProjectsType[]>([
        /*{id: v1(), img: shelter, titleProject: 'SHELTER', link: 'https://natikana.github.io/Shelter/main/'},
        {id: v1(), img: bookShop, titleProject: 'BOOK SHOP', link: 'https://natikana.github.io/Book_shop'},
        {id: v1(), img: socialNetwork, titleProject: 'APP FOR SOCIAL NETWORK', link: ''},*/
        {id: v1(), img: flashCards, titleProject: 'APP FOR LEARNING CARDS', link: 'https://natikana.github.io/cards/'},
        {id: v1(), img: tracking, titleProject: 'APP FOR TASK TRACING', link: 'https://natikana.github.io/Tracking-redux-toolkit'},
    ])

    return (<div id={"projects"} className={`${sectionCommon.section} ${cl.projects}`}>
            <Fade clear duration={3000}>
                <Title text={'Projects'} title={'Creative Projects'}/>
                <div className={cl.projectsSection}>
                    {projects.map(el => {
                        return (
                            <Project
                                link={el.link}
                                key={el.id}
                                img={el.img}
                                titleProject={el.titleProject}
                                id={el.id}
                            />
                        )
                    })}
                </div>
            </Fade>
        </div>
    )
}