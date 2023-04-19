import React from "react";
import cl from "./Title.module.scss"

export type TitleType = {
    text:string
    title:string
}

export const Title = (props:TitleType) => {
    return (<div className={cl.sectionTitle}>
            <span className={cl.title}>{props.text}</span>
            <h2 className={cl.mainTitle}>{props.title}</h2>
        </div>
    )
}