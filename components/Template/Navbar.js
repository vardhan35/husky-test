import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [isclick, setisClick] = useState(false);
  const handleClick = () => {
    setisClick(!isclick);
  };
  return (
    <div className={styles.navbar_container}>
      <nav className={styles.nav}>
        <div className={isclick ? styles.navbar_active : styles.navbar}>
          <Link href="/">
            <a className={styles.nav_item} onClick={handleClick}>
              Home
            </a>
          </Link>
          <Link href="/#about">
            <a className={styles.nav_item} onClick={handleClick}>
              About
            </a>
          </Link>
          <Link href="/#contact">
            <a className={styles.nav_item} onClick={handleClick}>
              Contact
            </a>
          </Link>
          <Link href="/projects">
            <a className={styles.nav_item} onClick={handleClick}>
              Portfolio
            </a>
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
            <i className={isclick ? "fa fa-times" : "fa fa-bars"}></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
