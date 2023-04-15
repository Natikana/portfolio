import React, {useState} from "react";
import {Skill, SkillType} from "./skill/Skill";
import cl from "./Skills.module.css"
import containerStyle from "../common/styles/Container.module.css"
import titleStyle from "../common/styles/Container.module.css"
import {v1} from "uuid";
import sectionCommon from "../common/styles/Container.module.css";


export const Skills = () => {
    const [skills, setSkills] = useState<SkillType[]>([
        {id:v1(), skill:'React', img:'http://www.w3.org/2000/svg'},
        {id:v1(), skill:'Javascript (ES6+)', img:'http://www.w3.org/2000/svg'},
        {id:v1(), skill:'Typescript', img:'http://www.w3.org/2000/svg'},
        {id:v1(), skill:'Redux', img:'http://www.w3.org/2000/svg'},
        {id:v1(), skill:'Material UI', img:'http://www.w3.org/2000/svg'},
        {id:v1(), skill:'Axios', img:'http://www.w3.org/2000/svg'},
        {id:v1(), skill:'HTML', img:'http://www.w3.org/2000/svg'},
        {id:v1(), skill:'CSS', img:''},
        {id:v1(), skill:'REST API', img:'http://www.w3.org/2000/svg'},
        {id:v1(), skill:'TDD', img:'http://www.w3.org/2000/svg'},
        {id:v1(), skill:'Postman', img:'http://www.w3.org/2000/svg'},
        {id:v1(), skill:'Git (GitHub)', img:'http://www.w3.org/2000/svg'},
    ])
    return (<div className={`${sectionCommon.section} ${skills}`}>
            <div className={containerStyle.mainContainer}>
                <span className={titleStyle.title}>Skills</span>
                <h2 className={titleStyle.mainTitle}>Programming Skills</h2>
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

            </div>
        </div>
    )
}