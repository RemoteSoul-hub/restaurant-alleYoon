import styles from "../../styles/Featured.module.css";
import Image from 'next/image';

const Featured = () => {

    const images = [
        "/img/featured.jpeg",
        "/img/featured2.png",
        "/img/featured3.png",
    ]
    
    return (
        <div className={styles.container}>
            <Image src="/src/arrowl.png" alt="" layout="fill" />
                <div clasName={styles.wrapper}>
                    <div className={styles.imgContainer}>
                        {/* {images.map((img, i) => (
                           <Image src="/img/featured.jpeg" alt="" key={i} layout="fill" />
                        ))} */}
                    </div>
                </div>
            <Image src="/src/arrowr.png" alt="" layout="fill" />
        </div>
    )
}

export default Featured
