import React from 'react';
import Logo from "../../images/logo_dark.png";
import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <img src={Logo} alt="img"/>
            <button>Sare a Car</button>
        </div>
      
    </div>
  )
}

export default Footer
