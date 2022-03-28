import styles from "../styles/NavBar.module.css"
import {IoFastFoodOutline} from 'react-icons/io5';
import Link from 'next/link'
import { RiUserSettingsLine,  RiShoppingCart2Line, RiSunLine, RiMoonLine} from "react-icons/ri";
import { useContext, useState, useEffect } from "react";
import { ThemeContext, ThemeUpdateContext } from "../ReactHooks/ThemeContext";


export const NavBar = () => {
    const darkTheme = useContext(ThemeContext)
    const toggleTheme = useContext(ThemeUpdateContext)
    useEffect(() => {
        console.log("nav",darkTheme)
    })
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <IoFastFoodOutline className={styles.icons}/> 
                <Link href="/">
                    <h1>TeeTea</h1>
                </Link>
            </div>
            <div className={styles.center}>
                <ul className={styles.list}>
                    <Link href="/">
                        <li className={styles.listItem}>Home</li>
                    </Link>
                    <Link href="/menu">
                        <li className={styles.listItem}>Menu</li>
                    </Link>
                    <Link href="/event">
                        <li className={styles.listItem}>Event</li>
                    </Link>
                    <Link href="/career">
                        <li className={styles.listItem}>Career</li>
                    </Link>
                    <Link href="/contact">
                        <li className={styles.listItem}>Contact</li>
                    </Link>
                </ul>
            </div>
            <div className={styles.right}>
                {
                    darkTheme ? <RiMoonLine className={styles.icons} onClick={toggleTheme}/> : <RiSunLine className={styles.icons} onClick={toggleTheme}/>
                }
                <div>
                    <RiShoppingCart2Line className={styles.icons}/>
                    <div className={styles.qtyCart}>3</div>
                </div>
                <RiUserSettingsLine className={styles.icons}/>
               

            </div>
        </div>
    )
}
