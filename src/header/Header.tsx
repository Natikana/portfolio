import React from "react";
import {SideBar} from "./sideBar/SideBar";
import {Footer} from "./footer/Footer";
import cl from "./Header.module.scss"
import {BurgerSideBar} from "./sideBar/burgerSideBar/BurgerSideBar";

export const Header = () => {
    return (
        <div className={cl.header}>
            <h3 className={cl.headerTitle}>WARSAW</h3>
            <SideBar/>
            <BurgerSideBar/>
            <Footer/>
        </div>
    )
}