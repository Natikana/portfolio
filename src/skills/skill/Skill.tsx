import React from "react";
import cl from "./Skill.module.scss"
import text from "../../common/styles/Common.module.scss"

export type SkillType = {
    id: string
    skill: string
    img: string
}


export const Skill = (props: SkillType) => {
    return (<div className={cl.skillSection}>
            <img src={props.img} alt={props.skill} width={'100px'} height={'100px'}/>
            <span className={text.generelText}>{props.skill}</span>
        </div>

    )
}