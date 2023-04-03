import React from "react";
import styles from "./styles/privateGroup.module.scss";
import img from "./../../../images/abc.png";
import { Link } from "react-router-dom";
function PrivateGroup(props) {
  return (
    <div className={styles.private}>
      <div className={styles.upper}>
        <div>
          <p>
            <span className="">
              <img src={img} alt="" />
            </span>
            <span className={styles.name}>ABC 15</span>
            <p className={styles.title}>Private Group</p>
          </p>
        </div>

        <div>
          <p>
            {" "}
            <a href="#" style={{ textDecoration: "none" }}>
              {" "}
              Edit Signal group
            </a>{" "}
          </p>
        </div>
      </div>
      <div >
        <p className={styles.title_main}>Minimum Allocation</p>
        <p className={styles.title_sub}>100 USDT</p>
      </div>
      <div >
        <p className={styles.title_main}>Maximum Allocation</p>
        <p className={styles.title_sub}>1000 USDT</p>
      </div>
      <div className={styles.others}>

      <p className={styles.sub} > Subscription  <span><a href="#">Free</a> </span> </p>
      <p className={styles.revenue} >Total Revenue Generated</p>
      <p className={styles.month} > This month <span className={styles.month_span}>$1000.00</span> </p>
      </div>

      < Link to='#' className={styles.btn} > view signal group </Link>
    </div>
  );
}

export default PrivateGroup;
