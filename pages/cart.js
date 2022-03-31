import styles from "../styles/Cart.module.css"
import Image from "next/image"
import product1 from "../public/img/product-1.avif"
import drink1 from "../public/img/drink-1.avif"
import { FaTrashAlt } from "react-icons/fa";
import { ChangeQty } from "../Components/ChangeQty";
const demoFood = {
  id:"1F",
  name: "Cheese Tokbokki",
  des:"Korean rice cakes, mozzarella cheese, fish cakes, sausages, ramen, Korean chili paste(gochujang), Korean chili flakes (gochugaru), soy sauce, garlic, sesame oil, green onion and sesame seeds",
  img: product1,
  size: [],
  price: [10.9],
  listAddIngredient: ['Cheese Rice Cake', 'Fish Cake', 'Sausages', 'Ramen'],
}
const demoDrink = {
  id:"1D",
  name: "Brown Sugar Bubble Milk Tea",
  des:"Bubble, brown sugar, milk",
  img: drink1,
  size: ["Small", "Medium", "Large"],
  price: [4.9, 5.8, 6.5],
  listAddIngredient: ["Cheese Foam", "Bubble", "Pudding", "Flan"],
}

export default function cart(){
  const product = demoDrink
  return (
    <div className={styles.container}>
      <h1>YOUR ORDER - OUR HAPPINESS</h1>
      <div className={styles.listOrderedItems}>
        <div className={styles.orderedItem}>
          <div className={styles.left}>
            <Image src={product.img}/>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>
              <h2>{product.name}</h2>
              <subtitle>(Product code: {product.id})</subtitle>
            </div>
            <div className={styles.info}>
              <div className={styles.infoWrapper}>
                <h4 style={{"width": "100%"}}>Add:</h4>
                {
                  product.listAddIngredient.map(igr => (
                      <div className={styles.extraIgr}>
                          <label htmlFor={igr}>{igr}</label>
                      </div>
                  ))
                }
              </div>
              <div className={styles.infoWrapper}>
                  <h4>Size:</h4>
                  <p>Small</p>
              </div>
              <div className={styles.infoWrapper}>
                  <h4>Quantity:</h4>
                  <ChangeQty product={product}/>
              </div>
              <div className={styles.infoWrapper}>
                  <h4>Price:</h4>
                  <p>€ {product.price[0]}</p>
              </div>
              <FaTrashAlt className={styles.trashIcon}/>
            </div>
          </div>

        </div>

        <div className={styles.orderedItem}>
        <div className={styles.left}>
          <Image src={product.img}/>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h2>{product.name}</h2>
            <subtitle>(Product code: {product.id})</subtitle>
          </div>
          <div className={styles.info}>
            <div className={styles.infoWrapper}>
              <h4 style={{"width": "100%"}}>Add:</h4>
              {
                product.listAddIngredient.map(igr => (
                    <div className={styles.extraIgr}>
                        <label htmlFor={igr}>{igr}</label>
                    </div>
                ))
              }
            </div>
            <div className={styles.infoWrapper}>
                <h4>Size:</h4>
                <p>Small</p>
            </div>
            <div className={styles.infoWrapper}>
                <h4>Quantity:</h4>
                <ChangeQty product={product}/>
            </div>
            <div className={styles.infoWrapper}>
                <h4>Price:</h4>
                <p>€ {product.price[0]}</p>
            </div>
            <FaTrashAlt className={styles.trashIcon}/>
          </div>
        </div>

      </div>

      </div>
      <div className={styles.checkOut}>
        <h2>CHECK OUT</h2>
        <div className={styles.listItems}>
          <div className={styles.item}>
            <h4>Name - Product code</h4>
            <p>Quantity</p>
            <p>Price</p>
          </div>
          <div className={styles.item}>
            <h4>Name - Product code</h4>
            <p>Quantity</p>
            <p>Price</p>
          </div>
          <div className={styles.item}>
            <h4>Name - Product code</h4>
            <p>Quantity</p>
            <p>Price</p>
          </div>
        </div>
        <div className={styles.total}>
            <h3>Total</h3>
            <p>€ 99</p>
        </div>
      </div>
    </div>
  )
}
