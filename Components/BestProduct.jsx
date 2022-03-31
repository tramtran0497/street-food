import styles from "../styles/ListBestProducts.module.css"
import Image from "next/image"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from "../Redux/Cart/action";
import Link from 'next/link'
import {IoCart, IoEyeSharp } from "react-icons/io5";


export const BestProduct = ({product}) => {
    const [isAdded, setIsAdded] = useState(false)
    const dispatch = useDispatch()
    const productForDispatch = {}
    const toggleAddCart = (good) => {
        console.log("product",product.id)
        console.log("good",good.id)

        if(product.id === good.id){
            setIsAdded(!isAdded)
            productForDispatch = good
        }
        
    }
    useEffect(() => {
        console.log("isAdd", isAdded)
        if(isAdded === true){
            dispatch(addToCart(productForDispatch))
        }
    })
  return (
    <div className={styles.foodWrapper}>
        <Image src={product.img} className={styles.img} alt={product.name}/>
        <div className={styles.foodInfo}>
            <h3>{product.name}</h3>
            <div className={styles.foodIcons}>
                <IoCart className={styles.icons} onClick={() => toggleAddCart(product)} style={{"color": isAdded ? "aquamarine" : "white"}}/>
                <Link  href={{
                    pathname: '/product/[id]',
                    query: { id: `${product.name}` }
                }}>
                    <IoEyeSharp className={styles.icons}/>
                </Link>
                
            </div>
        </div>
    </div>
  )
}
