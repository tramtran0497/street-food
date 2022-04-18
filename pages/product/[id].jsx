import styles from "../../styles/Product.module.css";
import drink1 from "../../public/img/drink-1.avif";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR, RiAddLine, RiSubtractLine } from "react-icons/ri";
import { BsCupStraw } from "react-icons/bs";
import Head from "next/head";
import { ChangeQty } from "../../Components/ChangeQty";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {listProducts} from "../../fakeData/MenuData.js";

const demoDrink = {
    id:"1D",
    name: "Brown Sugar Bubble Milk Tea",
    des:"Bubble, brown sugar, milk",
    img: drink1,
    size: ["Small", "Medium", "Large"],
    price: [4.9, 5.8, 6.5],
    listAddIngredient: ["Cheese Foam", "Bubble", "Pudding", "Flan"],
}

const product = demoDrink;

export default function Product () {
    const router = useRouter();
    const {id} = router.query;

    useEffect(() => {
        // const product = listProducts?.find(item => item.id === id);
        console.log(listProducts)
    });
  return (
    <div className={styles.container}>
        <Head>
            <title>TeeTea</title>
            <meta name="description" content="Best Street Food in Lahti" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.imgWrapper}>
            <Image src={product.img} alt={product.name} className={styles.img}/>
        </div>
        <div className={styles.info}>
            <h2>{product.name}</h2>
            <h2>€ {product.price}</h2>
            <subtitle><RiDoubleQuotesL style={{"margin": " 0 10px"}}/>{product.des}<RiDoubleQuotesR style={{"margin": " 0 10px"}}/></subtitle>       
            <form>
                <label className={styles.title}>Choose your favor size (only Drinks <BsCupStraw style={{"fontSize": "30px"}}/>) :</label>
                <select name="size" id="size" className={styles.size}>
                    <option value="none">Select size</option>
                    {
                        product.size.map(size => <option value={size} key={size}>{size}</option>)
                    }
                </select>

                <label className={styles.title}> Choose addition ingredients for your meal:</label>
                {
                    product?.listAddIngredient.map(igr => (
                        <div className={styles.extraIgr}>
                            <input type="checkbox" id={igr} name={igr} value={igr} />
                            <label htmlFor={igr}>{igr}</label>
                        </div>
                    ))
                }
                <label className={styles.title}>Unique taste! Leave your note here!</label>
                <input type="text" placeholder="E.g: Allergic to sesame" className={styles.note}/>
            </form>
            <div className={styles.qtyWrapper}>
                <label className={styles.title}>How many?</label>
                <ChangeQty product={product}/>
            </div>
            <button className={styles.btn}>Add Cart</button>
        </div>
    </div>
  );
};
