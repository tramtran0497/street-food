import styles from "../styles/Cart.module.css"
import Image from "next/image"
import product1 from "../public/img/product-1.avif"
import drink1 from "../public/img/drink-1.avif"
import { FaTrashAlt } from "react-icons/fa";
import { ChangeQty } from "../Components/ChangeQty";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { GiHotMeal } from "react-icons/gi";

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
  const {listCarts} = useSelector(state => state.cart);
  const initialValue = 0;
  const totalAmountBill = listCarts.map(cart => cart.qty * cart.price[0]).reduce((pre, cur) => pre + cur, 0);
  useEffect(() => {
    console.log("total", totalAmountBill)
  })
  const product = demoDrink
  return (
    <div className={styles.container}>
      <h1>YOUR ORDER - OUR HAPPINESS</h1>
      <div className={styles.listOrderedItems}>
        {
          listCarts.length ? listCarts.map(cart => (
            <div className={styles.orderedItem}>
              <div className={styles.left}>
                <Image src={cart.img}/>
              </div>
            <div className={styles.right}>
              <div className={styles.title}>
                <h2>{cart.name}</h2>
                <subtitle>(Product code: {cart.id})</subtitle>
              </div>
              <div className={styles.info}>
                <div className={styles.infoWrapper}>
                  <h4 style={{"width": "100%"}}>Add:</h4>
                  {
                    cart.listAddIngredient.map(igr => (
                        <div className={styles.extraIgr}>
                            <label htmlFor={igr}>{igr}</label>
                        </div>
                    ))
                  }
                </div>
                <div className={styles.infoWrapper}>
                    <h4>Size:</h4>
                    { /* hard code */}
                    <p>{cart.size[0]}</p>
                </div>
                <div className={styles.infoWrapper}>
                    <h4>Quantity:</h4>
                    <ChangeQty product={cart}/>
                </div>
                <div className={styles.infoWrapper}>
                    <h4>Price:</h4>
                    { /* hard code */}
                    <p>€ {cart.price[0]}</p>
                </div>
                <FaTrashAlt className={styles.trashIcon}/>
              </div>
            </div>
  
            </div>
          )) : <p className={styles.command}>There is nothing in your cart, please have a look and design you meal today! <GiHotMeal className={styles.icon}/></p>
        }
      </div>

      {
        listCarts.length ? (
          <div className={styles.checkOut}>
            <h2>CHECK OUT</h2>
            <div className={styles.listItems}>
              {
                listCarts.map(cart => (
                  <div className={styles.item}>
                    <h4>{cart.name} - {cart.id}</h4>
                    <p>{cart.qty}</p>
                    <p>{cart.qty * cart.price[0]}</p>
                  </div>
                ))
              }
            </div>
            <div className={styles.total}>
                <h3>Total</h3>
                <p>€ {totalAmountBill}</p>
            </div>
          </div>
        ): ""
      }
    </div>
  )
}
