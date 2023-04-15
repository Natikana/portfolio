import React from "react";
import cl from "./Freelance.module.css"
import containerStyle from "../common/styles/Container.module.css"
import titleStyle from "../common/styles/Container.module.css";
import text from "../common/styles/Container.module.css";
import btn from "../common/styles/Container.module.css";
import sectionCommon from "../common/styles/Container.module.css";


export const Freelance = () => {
    return (<div className={sectionCommon.section}>
            <div className={containerStyle.mainContainer}>
                <span className={titleStyle.title}>Freelance</span>
                <h2 className={titleStyle.mainTitle}>My Freelance</h2>
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