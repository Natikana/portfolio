import React, {useState} from "react";
import cl from "./SideBar.module.css"
import text from "../../common/styles/Container.module.css";

export const SideBar = () => {
    const [links, setLinks] = useState([
        {title: 'About me', href: '#'},
        {title: 'Skills', href: '#'},
        {title: 'Projects', href: '#'},
        {title: 'Contact', href: '#'},
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