import styles from "../styles/Menu.module.css"
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MenuSlidesCard } from "../Components/MenuSlidesCard";
import { lunchDinnerMenu, mainMenu } from "../fakeData/MenuData";
import { useState } from "react";
import { MenuList } from "../Components/MenuList";

export default function menu() {
    const [ index, setIndex] = useState(0)

    const handleClickMenu = (direction) => {
        console.log("clicked", index)
        if(direction === "left"){
            setIndex(index !== 0 ? index - 1 : 3)
        } else{
            setIndex(index !== 3 ? index + 1 : 0)
        }
    }
  return (
    <div className={styles.container}>
        <h1>MENU</h1>
        <div className={styles.btnWrapper}>
            <button className={styles.btn}>ORDER PICKUP</button>
            <button className={styles.btn}>ORDER DELIVERY</button>
        </div>
        <div className={styles.navBarMenu}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>LUNCH & DINNER</li>
                <li className={styles.navItem}>MAIN DISHES</li>
                <li className={styles.navItem}>DRINKS</li>
                <li className={styles.navItem}>SNACKS</li>
            </ul>
        </div>
        <div className={styles.menuWrapper}>
            <div className={styles.lunchDinnerMenu}>
                <BsFillArrowLeftCircleFill className={styles.icon} onClick={() => handleClickMenu("left")} style={{"left": "10px"}}/>
                <div className={styles.listLDDishes} style={{transform: `translateX(${-45*index}vw)`}} id="lunchDinner">
                    {
                        lunchDinnerMenu.map(dish => <MenuSlidesCard dish={dish} key={dish.id}/>)
                    }
                </div>
                <BsFillArrowRightCircleFill className={styles.icon} onClick={() => handleClickMenu("right")} style={{"right": "10px"}}/>
            </div>
            <MenuList id="mainMenu" menu="MAIN DISHES..." listItemsData={mainMenu}/>
        </div>

    </div>
  )
}
