import React from "react";
import styles from "./styles/membership.module.scss";
import { Link } from "react-router-dom";
function Membership(props) {
  return (
    <div className={styles.membership}>
      <p className={styles.para1}>Membership</p>
      <Link to="#" className={styles.btn}>
        {" "}
        Invite Members{" "}
      </Link>

      <div className={styles.para2}>
        <p>
          {" "}
          Member <span className={styles.para2_sub}>78</span>
        </p>
        <p>
          {" "}
          Connection Request <span className={styles.para2_sub}>5</span>
        </p>

      </div>
      <p className={styles.para3}></p>
    </div>
  );
}

export default Membership;
