import React from "react";
import cl from "./Contact.module.css"
import containerStyle from "../common/styles/Container.module.css"
import titleStyle from "../common/styles/Container.module.css";
import btn from "../common/styles/Container.module.css";
import text from "../common/styles/Container.module.css";
import sectionCommon from "../common/styles/Container.module.css";

export const Contact = () => {
    return (<div className={`${sectionCommon.section} ${cl.contact}`}>
            <div className={containerStyle.mainContainer}>
                <span className={titleStyle.title}>Contact</span>
                <h2 className={titleStyle.mainTitle}>Get in Touch</h2>
                <div className={cl.mapSection}>
                    <div className={cl.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312779.9431310756!2d20.781016711291045!3d52.232606289062204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw!5e0!3m2!1sen!2spl!4v1681480882675!5m2!1sen!2spl"
                            width="100%" height="355" style={{border:0}} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className={cl.fields}>
                    <form >
                        <div className={cl.form}>
                            <div className={cl.first}>
                                <ul className={cl.input}>
                                    <li className={cl.contactFields}>
                                        <input id="name" type="text" placeholder="Name"/>
                                    </li>
                                    <li className={cl.contactFields}>
                                        <input id="email" type="text" placeholder="Email"/>
                                    </li>
                                </ul>
                            </div>
                            <div className={cl.last}>
                                <textarea id="message" placeholder="Message"></textarea>
                            </div>
                            <button className={btn.commonBtn}>
                                <span className={`${text.generelText} ${cl.textBtn}`}>Send message</span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}