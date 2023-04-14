import React from "react";
import {SideBar} from "./sideBar/SideBar";
import {Footer} from "./footer/Footer";
import cl from "./Header.module.css"

export const Header = () => {
    return (
        <div className={cl.header}>
            <SideBar/>
            <Footer/>
        </div>

    )
}