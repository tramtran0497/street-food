import styles from "../styles/Help.module.css";
import Head from 'next/head';

export default function help(){
  return (
    <div className={styles.container}>
      <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        Help
    </div>
  )
};