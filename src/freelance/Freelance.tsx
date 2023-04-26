import React from "react";
import cl from "./Freelance.module.scss"
import text from "../common/styles/Common.module.scss";
import btn from "../common/styles/Common.module.scss";
import sectionCommon from "../common/styles/Common.module.scss";
import {Title} from "../common/components/title/Title";
import Fade from "react-reveal/Fade";
import cv from "../access/cv/cv.png"

export const Freelance = () => {
    return (<div id={"freelance"} className={sectionCommon.section}>
            <Fade right duration={3000}>
                <Title text={'Freelance'} title={'My Freelance'}/>
                <div className={cl.freelanceSection}>
                    <span className={`${text.generelText} ${cl.textMain}`}>I Am Available For Freelance Work</span>
                    <a href={cv} download className={btn.commonBtn}>
                        <span className={`${text.generelText} ${cl.textBtn}`}>Download CV</span>
                    </a>
                </div>
            </Fade>
        </div>
    )
}