import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/happyhour.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Happy Hour Platter</h1>
      <span className={styles.price}>$60</span>
      <p className={styles.desc}>
      Tokyo Maki (8), Deluxe Hosomaki (42), Nigiri (8)
      </p>
    </div>
  );
};

export default PizzaCard;
