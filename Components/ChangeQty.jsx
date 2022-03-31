import { useEffect } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Cart/action";
import styles from "../styles/ChangeQty.module.css"

export const ChangeQty = ({product,qty}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        
    })
    const handleClick = (act) => {
        if(act === "add"){  
            dispatch(addToCart(product))
        }

    }
  return (
    <div className={styles.quantity}>
        <RiSubtractLine className={styles.icon} onClick={() => handleClick("subtract")}/>
        <p className={styles.qtyAmount}>{qty}</p>
        <RiAddLine className={styles.icon} onClick={() => handleClick("add")}/>
    </div>
  )
}
