import React from "react";
import cl from "./Freelance.module.css"
import containerStyle from "../common/styles/Container.module.css"
import titleStyle from "../common/styles/Container.module.css";
import text from "../common/styles/Container.module.css";
import btn from "../common/styles/Container.module.css";
import sectionCommon from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";


export const Freelance = () => {
    return (<div id={"freelance"} className={sectionCommon.section}>
            <div className={containerStyle.mainContainer}>
                <Title text={'Freelance'} title={'My Freelance'}/>
                <div className={cl.freelanceSection}>
                    <span className={`${text.generelText} ${cl.textMain}`}>I Am Available For Freelance Work</span>
                    <button className={btn.commonBtn}>
                        <span className={`${text.generelText} ${cl.textBtn}`}>Hire me</span>
                    </button>
                </div>
            </div>
        </div>
    )
}