import React from "react";
import cl from "./AboutMe.module.scss"
import fb from "../access/socialLogo/fb.png"
import inL from "../access/socialLogo/in.png"
import gh from "../access/socialLogo/gh.png"
import {v1} from "uuid";
import Fade from "react-reveal/Fade";
import ReactTypingEffect from "react-typing-effect";


type socialIconsType = {
    id: string
    icon: string
    link: string
    textIcon: string
}

export const AboutMe = () => {

    const socialIcons: socialIconsType[] = [
        {id: v1(), icon: fb, link: 'https://www.facebook.com/natasza.natik', textIcon: 'fb'},
        {id: v1(), icon: gh, link: 'https://github.com/Natikana', textIcon: 'gh'},
        {id: v1(), icon: inL, link: 'https://www.linkedin.com/feed/', textIcon: 'inL'},
    ]

    return (
        <div id={"aboutMe"} className={cl.aboutMe}>
            <Fade clear duration={3000}>
                <div className={cl.details}>
                    <div className={cl.aboutMeFotoBlock}>
                        <div className={cl.fotoCV}></div>
                    </div>
                    <div className={cl.aboutMeDescrbPart}>
                        <h1 className={cl.aboutMeTitle}>NATALLIA MASHKOUSKAYA</h1>
                        <ReactTypingEffect
                            className={cl.mainText} text={"I am a Frontend Developer"}
                        />
                        <div className={cl.aboutMeSocialIcons}>
                            {socialIcons.map(el => {
                                return (
                                    <a key={el.id} href={el.link}>
                                        <img className={cl.socialIcon} src={el.icon} width={'20px'} height={'20px'}
                                             alt={el.textIcon}/>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}