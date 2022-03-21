import styles from "../styles/Footer.module.css"
import {IoLogoLinkedin, IoLogoGithub, IoLogoWhatsapp, IoLogoFacebook} from "react-icons/io5"
import { BiPhoneCall, BiNotepad, BiDonateHeart, BiCycling, BiMap} from "react-icons/bi";

export const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
               <div className={styles.openTime}>
                    <h2>Opening Hours</h2>
                    <p>Mon-Thu: 10:00 - 21:00</p>
                    <p>Fri, Sat: 11:00 - 22:00</p>
                    <p>Sun: 12:00 - 20:00</p>
               </div>
               <div className={styles.listStores}>
                    <h4><BiMap style={{"fontSize": "25px", "margin": "0 10px 0 0"}}/>Tee Tea - Lahti</h4>
                    <p>Mariankatu 6, 15110 Lahti Finland</p>
               </div>
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
                <div className={styles.contact}>
                    <BiPhoneCall className={styles.contactIcons}/><span className={styles.phoneNum}>+358 412 345 678</span>
                    <BiNotepad className={styles.contactIcons}/><span className={styles.phoneNum}>+358 412 345 678</span>
                    <BiDonateHeart className={styles.contactIcons}/><span className={styles.phoneNum}>+358 412 345 678</span>
                    <BiCycling className={styles.contactIcons}/><span className={styles.phoneNum}>+358 412 345 678</span>
                </div>
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