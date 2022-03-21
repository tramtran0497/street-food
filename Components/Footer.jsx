import styles from "../styles/Footer.module.css"
import {IoLogoLinkedin, IoLogoGithub, IoLogoWhatsapp, IoLogoFacebook} from "react-icons/io5"
import { BiPhoneCall, BiNotepad, BiDonateHeart, BiCycling } from "react-icons/bi";

export const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <BiPhoneCall className={styles.contactIcons}/><span className={styles.phoneNum}>+358 412 345 678</span>
                <BiNotepad className={styles.contactIcons}/><span className={styles.phoneNum}>+358 412 345 678</span>
                <BiDonateHeart className={styles.contactIcons}/><span className={styles.phoneNum}>+358 412 345 678</span>
                <BiCycling className={styles.contactIcons}/><span className={styles.phoneNum}>+358 412 345 678</span>
            </div>
            <div className={styles.center}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Career</li>
                    <li className={styles.listItem}>Event</li>
                    <li className={styles.listItem}>Home</li>
                </ul>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Order</li>
                    <li className={styles.listItem}>Delivery</li>
                    <li className={styles.listItem}>Book Table</li>
                    <li className={styles.listItem}>Check Out</li>
                    <li className={styles.listItem}>Customer Service</li>
                </ul>
            </div>
            <div className={styles.right}>
                <div className={styles.listIcons}>
                    <IoLogoLinkedin className={styles.icons}/>
                    <IoLogoGithub className={styles.icons}/>
                    <IoLogoWhatsapp className={styles.icons}/>
                    <IoLogoFacebook className={styles.icons}/>
                </div>
                <h6>© CopyRight Tram Tran 2022</h6>
            </div>
        </div>
    )
}