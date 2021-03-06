import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import { ChangeQty } from "../Components/ChangeQty";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { GiHotMeal } from "react-icons/gi";

export default function cart(){
  const {listCarts} = useSelector(state => state.cart);
  const initialValue = 0;
  const totalAmountBill = listCarts.map(cart => cart.qty * cart.price[0]).reduce((pre, cur) => pre + cur, 0);

  useEffect(() => {
  });
  
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
                    <p>??? {cart.price[0]}</p>
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
                <p>??? {totalAmountBill}</p>
            </div>
          </div>
        ): ""
      }
    </div>
  );
};
