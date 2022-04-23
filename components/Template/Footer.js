import styles from "../../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Link href="/">
        <a className={styles.footer_link}>
          Top
        </a>
      </Link>
      <div className={styles.footer}>
        <p>2021,Harshvardhan</p>
      </div>
    </footer>
  );
};

export default Footer;
