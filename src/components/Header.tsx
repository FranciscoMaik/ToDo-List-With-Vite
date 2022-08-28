import Logo from "../assets/logo.svg"

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.contentHeader}>
      <img src={Logo} alt="logo to do list" />
    </div>
  )
}

export default Header;