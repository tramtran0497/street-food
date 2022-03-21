import styles from "../styles/NavBar.module.css"
import {IoFastFoodOutline, IoCartOutline} from 'react-icons/io5';

export const NavBar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <IoFastFoodOutline className={styles.icons}/> 
                <h1>LoGo</h1>
            </div>
            <div className={styles.center}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Event</li>
                    <li className={styles.listItem}>Career</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.right}>
                <div>
                    <IoCartOutline className={styles.icons}/>
                    <div className={styles.qtyCart}>3</div>
                </div>
            </div>
        </div>
    )
}
