import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from './components/Featured'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alley Yoon's Sushi</title>
        <meta name="description" content="Best Sushi on Earth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    </div>
  )
}