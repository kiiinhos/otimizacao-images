import Head from 'next/head'
import Image from 'next/image'
import Img01 from '../public/images/indice.jpeg'
import Img02 from '../public/images/indice02.jpeg'
import styles from '../styles/Home.module.css'

// LazyLoad de forma automatica
export default function Home() {
  return (
    <div className={styles.container}>
      <Image src={Img01} width={1200} height={400} placeholder="blur"/>
      <Image src={Img02} width={1200} height={400} placeholder="blur"/>
    </div>
  )
}
