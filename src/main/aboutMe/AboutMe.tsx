import React from "react";
import cl from "./AboutMe.module.scss"
import fb from "../../access/socialLogo/fb.png"
import inL from "../../access/socialLogo/in.png"
import gh from "../../access/socialLogo/gh.png"
import {v1} from "uuid";
//import Particles from 'react-particles-js';
//import Fade from "react-reveal/Fade";
import { Component } from 'react';
import ReactTypingEffect from "react-typing-effect";

export interface ReactTypingEffectProps {
    text: string | string[];
    staticText?: string | undefined;
    className?: string | undefined;
    speed?: number | undefined;
    eraseDelay?: number | undefined;
    eraseSpeed?: number | undefined;
    typingDelay?: number | undefined;
    cursor?: string | undefined;
    cursorClassName?: string | undefined;
    displayTextRenderer?(text: string, i: number): JSX.Element;
}

type socialIconsType = {
    id: string
    icon: string
    link: string
    textIcon: string
}
const particlesOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}
export const AboutMe = () => {

    const socialIcons: socialIconsType[] = [
        {id: v1(), icon: fb, link: 'https://www.facebook.com/natasza.natik', textIcon: 'fb'},
        {id: v1(), icon: gh, link: 'https://github.com/Natikana', textIcon: 'gh'},
        {id: v1(), icon: inL, link: 'https://www.linkedin.com/feed/', textIcon: 'inL'},
    ]

    return (
        <div id={"aboutMe"} className={cl.aboutMe}>
            {/*<Particles
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        url: 'path/to/svg.svg'
                    }
                }} />*/}
           {/* <Fade top>*/}


                <div className={cl.details}>
                    <div className={cl.aboutMeFotoBlock}>
                        <div className={cl.foto}></div>
                        {/* <img className={cl.aboutMeFoto} src={cvFoto} height={'270px'} width={'270px'} alt={'fotoCV'}/>*/}
                    </div>
                    <div className={cl.aboutMeDescrbPart}>
                        <h1 className={cl.aboutMeTitle}>NATALLIA MASHKOUSKAYA</h1>
                        <span className={cl.mainText}>I am a Frontend Developer</span>
                        <ReactTypingEffect
                            text={"I am a Frontend Developer"}
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
            {/*</Fade>*/}
        </div>
    )
}