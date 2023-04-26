import React, {DetailedHTMLProps, FormEvent, FormEventHandler, FormHTMLAttributes} from "react";
import cl from "./Contact.module.scss"
import btn from "../common/styles/Common.module.scss";
import text from "../common/styles/Common.module.scss";
import sectionCommon from "../common/styles/Common.module.scss";
import {Title} from "../common/components/title/Title";
import Fade from "react-reveal/Fade";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contact = () => {
    const form = useRef(null);

    const sendEmail = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_5s2l2af', 'template_czia9qw', form.current, 'nHa0h8657FwRch5W8')
            .then((result:any) => {
                console.log(result.text);
                console.log('sent')
            }, (error:any) => {
                console.log(error.text);
            });
    };

    return (<div id={'contact'} className={`${sectionCommon.section} ${cl.contact}`}>
            <Fade clear duration={3000}>
                <Title text={'Contact'} title={'Get in Touch'}/>
                <div className={cl.contactBlock}>
                    <div className={cl.mapSection}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312779.9431310756!2d20.781016711291045!3d52.232606289062204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw!5e0!3m2!1sen!2spl!4v1681480882675!5m2!1sen!2spl"
                            width="100%" height="355" style={{border: 0}} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <form className={cl.contactForm} ref={form} onSubmit={sendEmail}>
                        <input className={cl.contactInput} id="name"  type="text" name="user_name" placeholder="Name"/>
                        <input className={cl.contactInput}  id="email" type="text" name="user_email" placeholder="Email"/>
                        <textarea className={cl.contactTextarea} id="message" name="message" placeholder="Message"></textarea>
                        <button type={"submit"} value="Send" className={btn.commonBtn}>
                            <span className={`${text.generelText} ${cl.textBtn}`}>Send message</span>
                        </button>
                    </form>
                </div>
            </Fade>
        </div>
    )
}