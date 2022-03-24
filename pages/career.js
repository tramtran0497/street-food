import styles from "../styles/Career.module.css"
import Image from 'next/image';
import career1 from "../public/img/career-1.avif"
import career2 from "../public/img/career-2.avif"
import career3 from "../public/img/career-3.avif"

const recruitList = [
    {
        jobName: "Manager Store",
        img: career1,
        qty: 1,
        reqs: [
            "Experience same position at least 1 year.",
            "Using Maraplan tool to support plan the schedule.",
            "Training employees.",
            "Ordering ingredients and stuffs once monthly.",
            "Others are shared in the interview."
        ]
    },
    {
        jobName: "Waiter/Waitress",
        img: career3,
        qty: 2,
        reqs: [
            "No experience is no big problem, you have your trial period.",
            "Speaking fluency English, Finnish or Vietnamese is a plus.",
            "Good attitude, good listener.",
            "Others are shared in the interview."
        ]
    },
    {
        jobName: "Cashier",
        img: career2,
        qty: 1,
        reqs: [
            "No experience is no big problem, you have your trial period.",
            "Speaking fluency Finnish and English, adding Vietnamese is a plus.",
            "Joviality with customers.",
            "Others are shared in the interview."
        ]
    },
]

export default function contact () {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>WE ARE HIRING...</h1>
                <div className={styles.cards}>
                    {
                        recruitList.map(position => (
                            <div className={styles.card} key={position.jobName}>
                                <div className={styles.imgWrapper}>
                                    <Image src={position.img}/>
                                </div>
                                <h2>{position.jobName}</h2>
                                <ul>
                                    {position.reqs.map((req,index) =>(
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                                
                                <p>We need: {position.qty} member(s)</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.formApplyJob}>
                <form action="">
                    <input type="text" placeholder="How do we call you?"/>
                    <input type="text" placeholder="How do we send you a message?"/>
                    <input type="text" placeholder="How do we contact you?"/>
                    <input type="text" placeholder="Which position are you interested?"/>
                    <input type="text" placeholder="What do you wish for this position?"/>
                    <input type="text" placeholder="Part-time or Full-time?"/>
                    <textarea type="text" placeholder="Tell me more your previous experience and yourself..."/>
                    <button className={styles.btn}>Apply Application Form</button>
                </form>
            </div>
        </div>
    )
}