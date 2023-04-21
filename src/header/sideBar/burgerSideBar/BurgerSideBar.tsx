import React from "react";
import cl from "./BurgerSideBar.module.scss"
import text from "../../../common/styles/Common.module.scss";
import {Link} from "react-scroll";
import {links} from "../SideBar";

export const BurgerSideBar = () => {

    return (
        <div className={cl.burgerSideBar}>
            <div className={cl.burgerSideBarBlock}>
                <nav className={cl.burgerSideBarNavBlock}>
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
        </div>

    )
}