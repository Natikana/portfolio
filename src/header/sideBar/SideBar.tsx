import React, {useState} from "react";
import cl from "./SideBar.module.scss"
import text from "../../common/styles/Common.module.scss";

export const SideBar = () => {
    const [links, setLinks] = useState([
        {title: 'About me', href: '#aboutMe'},
        {title: 'Skills', href: '#skills'},
        {title: 'Projects', href: '#projects'},
        {title: 'Freelance', href: '#freelance'},
        {title: 'Contact', href: '#contact'},
    ])
    return (
        <div className={cl.sideBar}>
            <div className={cl.sideBarBlock}>
                <h3>WARSAW</h3>
                <nav className={cl.navBlock}>
                    {links.map((el, i) => {
                            return <a className={`${text.generelText} ${cl.mainText}`} key={i} href={el.href}>{el.title}</a>
                        }
                    )}
                </nav>
            </div>
        </div>

    )
}