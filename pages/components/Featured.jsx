import styles from "../../styles/Featured.module.css";
import Image from 'next/image';
import ReactSlidy from 'react-slidy'

const Featured = () => {

    const images = [
        "/img/featured.jpeg",
        "/img/featured2.png",
        "/img/featured3.png",
    ]
    
    return (
        <div className={styles.container}>
                <div clasName={styles.wrapper}>
                    <div className={styles.imgContainer}>
                        <Image src='/../public/img/featured2.jpeg' alt="" layout='responsive' width='1920px' height='1080px' />
                        <div className={styles.titleCtn}>
                        <h1 className={styles.title}>Title</h1>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Featured
