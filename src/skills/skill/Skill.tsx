import React from "react";
import cl from "./Skill.module.css"
import text from "../../common/styles/Container.module.css"

export type SkillType = {
    id:string
    skill:string
    img:string
}


export const Skill = (props:SkillType) => {
    return (<div className={cl.skillSection}>
            <div className={cl.skill}>
                <li className={text.generelText}>
                    {props.skill}
                </li>
            </div>
    </div>

    )
}