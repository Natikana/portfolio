import React, {useState} from "react";
import {Skill, SkillType} from "./skill/Skill";
import cl from "./Skills.module.scss"
import Fade from "react-reveal/Fade";
import {v1} from "uuid";
import sectionCommon from "../common/styles/Common.module.scss";
import {Title} from "../common/components/title/Title";


export const Skills = () => {
    const [skills, setSkills] = useState<SkillType[]>([
        {id: v1(), skill: 'React', img: 'http://www.w3.org/2000/svg'},
        {id: v1(), skill: 'Javascript (ES6+)', img: 'http://www.w3.org/2000/svg'},
        {id: v1(), skill: 'Typescript', img: 'http://www.w3.org/2000/svg'},
        {id: v1(), skill: 'Redux', img: 'http://www.w3.org/2000/svg'},
        {id: v1(), skill: 'Material UI', img: 'http://www.w3.org/2000/svg'},
        {id: v1(), skill: 'Axios', img: 'http://www.w3.org/2000/svg'},
        {id: v1(), skill: 'HTML', img: 'http://www.w3.org/2000/svg'},
        {id: v1(), skill: 'CSS', img: ''},
        {id: v1(), skill: 'REST API', img: 'http://www.w3.org/2000/svg'},
        {id: v1(), skill: 'TDD', img: 'http://www.w3.org/2000/svg'},
        {id: v1(), skill: 'Postman', img: 'http://www.w3.org/2000/svg'},
        {id: v1(), skill: 'Git (GitHub)', img: 'http://www.w3.org/2000/svg'},
    ])
    return (<div id={"skills"} className={`${sectionCommon.section} ${cl.skills}`}>
            <Fade right duration={3000}>
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