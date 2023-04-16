import React from "react";
import cl from "./AboutMe.module.css"
import fb from "../../access/socialLogo/fb.png"
import inL from "../../access/socialLogo/in.png"
import gh from "../../access/socialLogo/gh.png"
import cvFoto from "../../access/img/cv-foto.jpg"

export const AboutMe = () => {
    return (
        <div className={cl.aboutMe}>
            <div className={cl.details}>
                {/*<div className={cl.aboutMe}>*/}
                <img className={cl.aboutMePart}  src={cvFoto} height={'340px'} width={'300px'} alt={'fotoCV'} />
                {/*</div>*/}
                <div className={cl.aboutMeDescrbPart}>
                    <h1 className={cl.aboutMeTitle}>NATALLIA MASHKOUSKAYA</h1>
                    <span className={cl.mainText}>I am a Frontend Developer</span>
                    <div className={cl.aboutMeSocialIcons}>
                        <a href={'#'}>
                            <img className={cl.socialIcon} src={fb} width={'20px'} height={'20px'} alt='fb'/>
                        </a>
                        <a href={'#'}>
                            <img className={cl.socialIcon} src={gh} width={'20px'} height={'20px'} alt='gh'/>
                        </a>
                        <a href={'#'}>
                            <img className={cl.socialIcon} src={inL} width={'20px'} height={'20px'} alt='ln'/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}