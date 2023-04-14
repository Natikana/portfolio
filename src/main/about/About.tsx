import React from "react";
import cl from "./About.module.css"

export const About = () => {
    return (
        <div className={cl.about}>
            <h3>About Me</h3>
            <img src={'#'} alt={'fotoCV'} className={cl.fotoCVAbout}/>
            <div>
                <h4>Natallia Mashkouskaya</h4>
                <span>Frontend Developer</span>
            </div>
        </div>
    )
}