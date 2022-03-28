import styles from "../styles/Menu.module.css"
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import { MenuSlidesCard } from "../Components/MenuSlidesCard"
import { drinkMenu, lunchDinnerMenu, mainMenu, snacksMenu } from "../fakeData/MenuData"
import { useState } from "react"
import { MenuList } from "../Components/MenuList"
import Head from 'next/head'


export default function menu() {
    const [ index, setIndex] = useState(0)
    const [menuName, setMenuName] = useState("main")

    const handleClickNavBar = (name) => {
         setMenuName(name)
    }

    const handleClickMenuSlides = (direction) => {
        if(direction === "left"){
            setIndex(index !== 0 ? index - 1 : 3)
        } else{
            setIndex(index !== 3 ? index + 1 : 0)
        }
    }
  return (
    <div className={styles.container}>
        <Head>
            <title>TeeTea</title>
            <meta name="description" content="Best Street Food in Lahti" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>MENU</h1>
        <div className={styles.btnWrapper}>
            <button className={styles.btn}>ORDER PICKUP</button>
            <button className={styles.btn}>ORDER DELIVERY</button>
        </div>
        <div className={styles.navBarMenu}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>LUNCH & DINNER</li>
                <li className={styles.navItem} onClick={() => handleClickNavBar("main")}>MAIN DISHES</li>
                <li className={styles.navItem} onClick={() => handleClickNavBar("drinks")}>DRINKS</li>
                <li className={styles.navItem} onClick={() => handleClickNavBar("snacks")}>SNACKS</li>
            </ul>
        </div>
        <div className={styles.menuContainer}>
            <div className={styles.lunchDinnerMenu}>
                <BsFillArrowLeftCircleFill className={styles.icon} onClick={() => handleClickMenuSlides("left")} style={{"left": "10px"}}/>
                <div className={styles.listLDDishes} style={{transform: `translateX(${-45*index}vw)`}} id="lunchDinner">
                    {
                        lunchDinnerMenu.map(dish => <MenuSlidesCard dish={dish} key={dish.id}/>)
                    }
                </div>
                <BsFillArrowRightCircleFill className={styles.icon} onClick={() => handleClickMenuSlides("right")} style={{"right": "10px"}}/>
            </div>
            <div className={styles.menuWrapper}>
                <MenuList id="mainMenu" menu="MAIN DISHES..." listItemsData={mainMenu} isShowed={menuName === "main" ? true : false} />
                <MenuList id="drinksMenu" menu="DRINKS..." listItemsData={drinkMenu} isShowed={menuName === "drinks" ? true : false}/> 
                <MenuList id="snacksMenu" menu="SNACKS..." listItemsData={snacksMenu} isShowed={menuName === "snacks" ? true : false} />
            </div> 
        </div>

    </div>
  )
}
