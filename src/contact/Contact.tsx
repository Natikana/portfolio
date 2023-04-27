import React, {useState} from "react";
import cl from "./Contact.module.scss"
import btn from "../common/styles/Common.module.scss";
import text from "../common/styles/Common.module.scss";
import sectionCommon from "../common/styles/Common.module.scss";
import {Title} from "../common/components/title/Title";
import Fade from "react-reveal/Fade";
import emailjs from '@emailjs/browser';
import {useFormik} from 'formik';
import * as Yup from 'yup';


export const Contact = () => {

    const [load, setLoad] = useState<'success' | 'failed' | 'idle'>('idle')

    const formik = useFormik({

        initialValues: {
            from_name: '',
            to_name: 'template_czia9qw',
            reply_to: '',
            message: ''
        },
        validationSchema: Yup.object({
            from_name: Yup.string().min(3, <div className={`${cl.contactMessage} ${cl.contactError}`}>Must be at least 3
                characters</div>)
                .max(20, <div className={`${cl.contactMessage} ${cl.contactError}`}>Too Long!</div>)
                .required(<div className={`${cl.contactMessage} ${cl.contactError}`}>Name field is required</div>),
            reply_to: Yup.string()
                .email(<div className={`${cl.contactMessage} ${cl.contactError}`}>Invalid email address</div>)
                .required(<div className={`${cl.contactMessage} ${cl.contactError}`}>Email field is required</div>),
            message: Yup.string()
                .min(4, <div className={`${cl.contactMessage} ${cl.contactError}`}>Must be at least 4 characters</div>)
                .required(<div className={`${cl.contactMessage} ${cl.contactError}`}>Message field is required</div>)
        }),
        onSubmit: (values) => {

            emailjs.send('service_5s2l2af', 'template_czia9qw', values, 'nHa0h8657FwRch5W8')
                .then((res: {}) => {
                    console.log(res)
                    console.log('sent')
                    setLoad('success')
                    setTimeout(() => {
                        setLoad('idle')
                    }, 4000)
                    formik.setSubmitting(false);
                    formik.resetForm();
                })
                .catch((error: {}) => {
                    console.log(error)
                    formik.setSubmitting(false);
                    setLoad('failed')
                    setTimeout(() => {
                        setLoad('idle')
                    }, 4000)
                })

        },
    });

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

                    {load === 'success'
                        && <div className={cl.contactMessage}>
                            Your message has been received, I will contact you soon
                        </div>}
                    {load === 'failed' &&
                        <div className={`${cl.contactMessage} ${cl.contactError}`}>Problem with Network</div>}

                    <form className={cl.contactForm} onSubmit={formik.handleSubmit}>
                        <input
                            className={cl.contactInput}
                            id="from_name"
                            placeholder="Name"
                            {...formik.getFieldProps('from_name')}
                        />
                        {formik.touched.from_name && formik.errors.from_name && <div>{formik.errors.from_name}</div>}
                        <input
                            className={cl.contactInput}
                            id="reply_to"
                            placeholder="Email"
                            {...formik.getFieldProps('reply_to')}
                        />
                        {formik.touched.reply_to && formik.errors.reply_to && <div>{formik.errors.reply_to}</div>}
                        <textarea className={cl.contactTextarea}
                                  id="message"
                                  placeholder="Message"
                                  {...formik.getFieldProps('message')}
                        />
                        {formik.touched.message && formik.errors.message && <div>{formik.errors.message}</div>}
                        {formik.isSubmitting && <div className={cl.contactSending}>Sending your message...</div>}
                        <button disabled={formik.isSubmitting}
                                style={formik.isSubmitting ? {backgroundColor: 'darkgray'} : {backgroundColor: ''}}
                                className={`${btn.commonBtn} ${cl.btn}`} type="submit">
                            <span className={`${text.generelText} ${cl.textBtn}`}>Send message</span>
                        </button>
                    </form>
                </div>
            </Fade>
        </div>
    )
}