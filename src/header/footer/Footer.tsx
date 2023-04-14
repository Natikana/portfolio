import React from "react";
import cl from "./Footer.module.css"


export const Footer = () => {
    return (
        <div>
           {/* <div className={cl.footerMenu}>
                <a href={'#'}>
                    <img className={cl.socialIcon} src={'#'} alt='fb'/>
                </a>
                <a href={'#'}>
                    <img className={cl.socialIcon} src={'#'} alt='gh'/>
                </a>
                <a href={'#'}>
                    <img className={cl.socialIcon} src={'#'} alt='ln'/>
                </a>
            </div>*/}
            <span className={cl.creator}>
                © 2023 Created by
                <p>Natallia Mashkouskaya</p>
            </span>

        </div>

    )
}