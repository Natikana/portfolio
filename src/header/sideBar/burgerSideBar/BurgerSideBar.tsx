import React, {useState} from "react";
import cl from "./BurgerSideBar.module.scss"
import text from "../../../common/styles/Common.module.scss";
import {Link} from "react-scroll";
import {links} from "../SideBar";

export const BurgerSideBar = () => {
    const [openBurger, setOpenBurger] = useState<boolean>(false)
    const handlerOpenBurger = () => {
        setOpenBurger(!openBurger)
    }
//openBurger ? `${cl.burgerSideBarBtn} ${cl.burgerSideBarBtnOpen}` : cl.burgerSideBarBtn
    return (
        <div className={cl.burgerSideBar}>
            <div className={cl.burgerSideBarBtn}
                 onClick={handlerOpenBurger}></div>
            <nav className={openBurger ? `${cl.burgerSideBarNavBlock} ${cl.show} ` : cl.burgerSideBarNavBlock}>
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
            {/*</div>*/}

        </div>

    )
}