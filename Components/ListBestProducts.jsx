import styles from "../styles/ListBestProducts.module.css"
import Image from "next/image"
import {IoCart, IoEyeSharp } from "react-icons/io5";
import {listFoods, listDrinks} from "../fakeData/MenuData.js"
import Link from 'next/link'

export const ListBestProducts = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>Best Foods & Drinks</h2>
            <p>The unique restaurant with Asia street food style, we always bring to you the best moment!
               Your feeling as relax, enjoy your meal and chill the music after stressing in life.
               Friends and Family are around you!!! 
            </p>
            <p>Here, List best foods and drinks are received much love from customers in this spring term, Let's try them with your friends and family!</p>
        </div>
        <div className={styles.listProducts}>
            <div className={styles.listFoods}>   
                {
                    listFoods.map(food => (
                        <div className={styles.foodWrapper}>
                            <Image src={food.img} className={styles.img} alt={food.name}/>
                            <div className={styles.foodInfo}>
                                <h3>{food.name}</h3>
                                <div className={styles.foodIcons}>
                                    <IoCart className={styles.icons}/>
                                    <Link  href={{
                                        pathname: '/product/[id]',
                                        query: { id: `${food.name}` }
                                      }}>
                                        <IoEyeSharp className={styles.icons}/>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={styles.listDrinks}>
                {
                    listDrinks.map(drink => (
                        <div className={styles.drinkWrapper}>
                            <Image src={drink.img} className={styles.img} alt={drink.name}/>
                            <div className={styles.foodInfo}>
                                <h3>{drink.name}</h3>
                                <div className={styles.foodIcons}>
                                    <IoCart className={styles.icons}/>
                                    <IoEyeSharp className={styles.icons}/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}