import styles from "../styles/Menu.module.css"

export const MenuList = ({id, menu, listItemsData, }) => {
  return (
    <div className={styles.menuCard} id={id}>
        <h2 className={styles.typedOut}>{menu}</h2>
        <ul className={styles.listItems}>
            {
                listItemsData.map(item => (
                    <div key={item.id} className={styles.itemWrapper}>
                        <h3>{item.name}</h3>
                        <h4>€ {item.price}</h4>
                        <h5>{item.ingredients} - {item.extraInfo}</h5>
                    </div>
                ))
            }   
        </ul>
    </div>
  )
}
