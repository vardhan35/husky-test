import Link from "next/link";
import styles from "../styles/Error.module.css";
import HeadComponent from "../components/HeadComponent";

const PageNotFound = () => {
  return (
    <>
    <HeadComponent value={"Page Not Found"} />
    <div className={styles.errorMsg}>
      <h1 className={styles.title}>Page Not Found</h1>
        <Link href="/">
          <a className={styles.link} >
            Go Back
          </a>
        </Link>
    </div>
    </>
  );
}

export default PageNotFound;