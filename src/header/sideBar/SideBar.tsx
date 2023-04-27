import React from "react";
import cl from "./SideBar.module.scss"
import text from "../../common/styles/Common.module.scss";
import {Link} from "react-scroll";

export const links: { title: string, href: string }[] = [
    {title: 'About me', href: 'aboutMe'},
    {title: 'Skills', href: 'skills'},
    {title: 'Projects', href: 'projects'},
    {title: 'Freelance', href: 'freelance'},
    {title: 'Contact', href: 'contact'},
]
export const SideBar = () => {

    return (
        <div className={cl.sideBar}>
            <nav className={cl.navBlock}>
                {links.map((el, i) => {
                        return <Link
                            activeClass={cl.active}
                            className={`${text.generelText} ${cl.mainText}`} key={i}
                            to={el.href}
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={1}
                            duration={1000}
                            delay={1000}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                            spyThrottle={500}
                        >{el.title}
                        </Link>
                    }
                )}
            </nav>
        </div>

    )
}