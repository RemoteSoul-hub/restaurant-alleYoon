import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            FOLLOW US ON SOCIAL MEDIA FOR FREE COUPONS AND DELIVERY EXTRAS <br/> (OUT OF CHARGE!)
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
          7965 State Rd 50 Ste 900
            <br /> Groveland, FL 34736
            <br /> (012) 345-6978
          </p>
          <p className={styles.text}>
          7965 State Rd 50 Ste 900
            <br /> Groveland, FL 34736
            <br /> (012) 345-6978
          </p>
          <p className={styles.text}>
          7965 State Rd 50 Ste 900
            <br /> Groveland, FL 34736
            <br /> (012) 345-6978
          </p>
          <p className={styles.text}>
          7965 State Rd 50 Ste 900
            <br /> Groveland, FL 34736
            <br /> (012) 345-6978
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
