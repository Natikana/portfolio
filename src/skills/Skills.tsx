import React, {useState} from "react";
import {Skill, SkillType} from "./skill/Skill";
import cl from "./Skills.module.scss"
import Fade from "react-reveal/Fade";
import {v1} from "uuid";
import sectionCommon from "../common/styles/Common.module.scss";
import {Title} from "../common/components/title/Title";
import inProgress from "../access/img/work-progress.png"


export const Skills = () => {
    const [skills, setSkills] = useState<SkillType[]>([
        {id: v1(), skill: 'React', img: inProgress},
        {id: v1(), skill: 'Javascript', img: inProgress},
        {id: v1(), skill: 'Typescript', img: inProgress},
        {id: v1(), skill: 'Redux', img: inProgress},
        {id: v1(), skill: 'Material UI', img: inProgress},
        {id: v1(), skill: 'Axios', img: inProgress},
        {id: v1(), skill: 'HTML', img: inProgress},
        {id: v1(), skill: 'CSS', img: inProgress},
        {id: v1(), skill: 'REST API', img: inProgress},
        {id: v1(), skill: 'TDD', img: inProgress},
        {id: v1(), skill: 'Postman', img: inProgress},
        {id: v1(), skill: 'Git', img: inProgress},
    ])
    return (<div id={"skills"} className={`${sectionCommon.section} ${cl.skills}`}>
            <Fade clear duration={3000}>
                <Title text={'Skills'} title={'Programming Skills'}/>
                <div className={cl.skillsSection}>
                    {skills.map(el => {
                        return (<Skill
                                id={el.id}
                                key={el.id}
                                skill={el.skill}
                                img={el.img}
                            />
                        )
                    })}
                </div>
            </Fade>
        </div>
    )
}