import styles from "../../styles/Contact.module.css";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.contact}>
        <header className={styles.header}>
          <h1>Contact</h1>
        </header>
        <div className={styles.card}>
          <div className={styles.email}>
            <h2>Harshvardhan Kalse</h2>
            <h2 className={styles.email_id}>harshwardhankalse03@gmail.com</h2>
            <h2>+91-7558459296</h2>
            <h2>Murud-Latur,Maharashtra,Bharat</h2>
          </div>
          <div className={styles.socialmedia}>
            <h2 className={styles.bold}>Social Media</h2>
            <div className={styles.socialmedia_id}>
              <Link href="https://www.linkedin.com/in/vardhan35/">
                <Image
                  className={styles.img}
                  src="/icons/linkedIn.png"
                  width={70}
                  height={70}
                  alt="vardhan's linkedIn"
                />
              </Link>
              <Link href="https://github.com/vardhan35">
                <Image
                  className={styles.img}
                  src="/icons/gitHub.png"
                  width={70}
                  height={70}
                  alt="vardhan's github"
                />
              </Link>
              <Link href="https://www.instagram.com/vardhan3_5/">
                <Image
                  className={styles.img}
                  src="/icons/instaGram.png"
                  width={70}
                  height={70}
                  alt="vardhan's instaGram"
                />
              </Link>
              <Link href="https://twitter.com/vardhan305">
                <Image
                  className={styles.img}
                  src="/icons/twitter.png"
                  width={70}
                  height={70}
                  alt="vardhan's twitter"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
