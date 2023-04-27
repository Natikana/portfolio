import React from "react";
import cl from "./Footer.module.scss"


export const Footer = () => {
    return (
        <div className={cl.footer}>
            <span className={cl.creator}>
                © 2023 Created by
                <p>Natallia Mashkouskaya</p>
            </span>
        </div>
    )
}