import React from "react";
import styles from "./navBar.module.scss";
import logo from "./../../images/forground 2.png";
import user from "./../../images/user.png";

function NavBar(props) {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" width="85px" height="56px" />
        </div>
        <div className={styles.data}>
            <div  className={styles.img}>

          <img src={user} alt="" />{" "}
            </div>
            <div style={{marginTop:'10px'}} >
          <span className={styles.userName}>Martinex George</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
