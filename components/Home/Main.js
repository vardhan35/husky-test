import styles from "../../styles/Main.module.css";
import Link from "next/link";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>Harshvardhan</h1>
        <h3>I'm Front-End Developer</h3>
        <div className={styles.main_actions}>
          <Link href="/projects">
            <button className={styles.main_project_btn}>PORTFOLIO</button>
          </Link >
          <Link href="/Resume.pdf" >
            <button className={styles.main_resume_btn}>RESUME</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
