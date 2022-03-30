import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import styles from "../styles/ChangeQty.module.css"

export const ChangeQty = () => {
    const qty = 3
  return (
    <div className={styles.quantity}>
        <RiSubtractLine className={styles.icon}/>
        <p className={styles.qtyAmount}>{qty}</p>
        <RiAddLine className={styles.icon}/>
    </div>
  )
}
