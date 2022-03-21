import styles from "../styles/ListBestProducts.module.css"
import food1 from "../public/img/product-1.avif"
import food2 from "../public/img/product-2.avif"
import food3 from "../public/img/product-3.avif"
import food4 from "../public/img/product-4.avif"
import drink1 from "../public/img/drink-1.avif"
import drink2 from "../public/img/drink-2.avif"
import drink3 from "../public/img/drink-3.avif"
import drink4 from "../public/img/drink-4.avif"
import Image from "next/image"
import { IoHeartCircle, IoCart, IoEyeSharp } from "react-icons/io5";


const listFoods = [
    {
        name: "Cheese Tokbokki",
        img: food1,
    },
    {
        name: "Ramen",
        img: food2,
    },
    {
        name: "Pork Dumpling",
        img: food3,
    },
    {
        name: "Crispy Chicken",
        img: food4,
    },
]

const listDrinks = [
    {
        name: "Brown Sugar Bubble Milk Tea",
        img: drink1,
    },
    {
        name: "Berries Smoothy",
        img: drink2,
    },
    {
        name: "Chocolate Ice Blend",
        img: drink3,
    },
    {
        name: "Mint Orange",
        img: drink4,
    },
]

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
                                    <IoEyeSharp className={styles.icons}/>
                                    <IoHeartCircle className={styles.icons}/>
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
                                    <IoHeartCircle className={styles.icons}/>
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