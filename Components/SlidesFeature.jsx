import styles from "../styles/SlidesFeature.module.css"
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi"
import Image from "next/image"
import slidePhoto1 from "../public/img/photo-1.avif"
import slidePhoto2 from "../public/img/photo-2.avif"
import slidePhoto3 from "../public/img/photo-3.avif"
import { useState } from "react"

const listSlides = [
    {
        img: slidePhoto1,
        title: "CoCoNut Coffee",
        subtitle: "Always bring new delicious dinking to you"
    },
    {
        img: slidePhoto2,
        title: "Banh Mi",
        subtitle: "VietNamese cuisine is coming! Change your taste."
    },
    {
        img: slidePhoto3,
        title: "Friends Days",
        subtitle: "Get discount to 50% for friends party!"
    }
]

export const SlidesFeature = () => {
    const lastIndexSlide = listSlides.length - 1
    const [index, setIndex] = useState(0)

    const handleSlides = (direction) => {
        if(direction === "left"){
            setIndex(index !== 0 ? index - 1 : lastIndexSlide)
        } else{
            setIndex(index !== lastIndexSlide ? index + 1 : 0)
        }
    }
  return (
    <div className={styles.container}>
        <BiChevronsLeft className={styles.icons} style={{"left": "20px"}} onClick={() => handleSlides("left")}/>
        <div className={styles.slidesWrapper} style={{transform: `translateX(${-100*index}vw)`}}>
             {listSlides.map((slide, index) => 
                (   
                    <div className={styles.imgWrapper} key={slide.title}>
                        <div className={styles.info}>
                            <h2>{slide.title}</h2>
                            <subtitle>{slide.subtitle}</subtitle>
                        </div>
                        <Image src={slide.img} alt={slide.title} className={styles.img} key={index} />
                    </div>
                ))}
        </div>
        <BiChevronsRight className={styles.icons} style={{"right": "20px"}} onClick={() => handleSlides("right")}/>
    </div>
  )
}
