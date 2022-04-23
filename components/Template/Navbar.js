import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  const [isclick, setisClick] = useState(false);
  const handleClick = () => {
    setisClick(!isclick);
  };
  return (
    <div className={styles.navbar_container}>
      <nav className={styles.nav}>
        <div className={isclick ? styles.navbar_active : styles.navbar}>
          <Link href="/">
            <button type="button" className={styles.nav_item} onClick={handleClick}>
              Home
            </button>
          </Link>
          <Link href="/#about">
            <button type="button" className={styles.nav_item} onClick={handleClick}>
              About
            </button>
          </Link>
          <Link href="/#contact">
            <button type="button" className={styles.nav_item} onClick={handleClick}>
              Contact
            </button>
          </Link>
          <Link href="/projects">
            <button type="button" className={styles.nav_item} onClick={handleClick}>
              Portfolio
            </button>
          </Link>
        </div>
        <div className="hamburger">
          <button
            type="submit"
            className={
              isclick ? styles.navbar_hamburger_active : styles.navbar_hamburger
            }
            onClick={handleClick}
          >
            <i className={isclick ? "fa fa-times" : "fa fa-bars"} />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
