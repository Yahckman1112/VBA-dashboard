import React from "react";
import styles from "./styles/membership.module.scss";
import { Link } from "react-router-dom";
function Membership(props) {
  const emails = [
    {
      email: "johnryan@gmail.com",
    },
    {
      email: "jonathanwhite@gmail.com",
    },
    {
      email: "macryenoldsjean@gmail.com",
    },
    {
      email: "josephjacobjudah@gmail.com",
    },
  ];
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

      <p className={styles.para3}>Active member emails</p>

      {emails.map((item, index) => (
        <>
        <div className={styles.line}></div>
        <div className={styles.email} key={index}>
          <p className={styles.email_text}>{item.email}</p>
        </div>
        </>
      ))}
    </div>
  );
}

export default Membership;
