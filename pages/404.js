import Link from "next/link";
import styles from "../styles/Error.module.css";
import HeadComponent from "../components/HeadComponent";

function PageNotFound() {
  return (
    <>
      <HeadComponent value="Page Not Found" />
      <div className={styles.errorMsg}>
        <h1 className={styles.title}>Page Not Found</h1>
        <Link href="/">
          <a href="/" className={styles.link}>
            Go Back
          </a>
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;
