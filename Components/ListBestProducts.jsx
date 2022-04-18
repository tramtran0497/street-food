import styles from "../styles/ListBestProducts.module.css";
import {listProducts} from "../fakeData/MenuData.js";
import { BestProduct } from "./BestProduct";

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
                    listProducts.map(product => product.type === "Best Food Item" ? <BestProduct product={product}/> : "")
                }
            </div>
            <div className={styles.listDrinks}>
                {
                    listProducts.map(product => product.type === "Best Drink Item" ? <BestProduct product={product} height="600px"/> : "")
                }
            </div>
        </div>
    </div>
  )
}