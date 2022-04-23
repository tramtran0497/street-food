import styles from "../styles/DeliveryPolicy.module.css";
import Head from 'next/head';

export default function deliveryPolicy(){
  return (
    <div className={styles.container}>
      <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        Delivery Policy
    </div>
  )
};