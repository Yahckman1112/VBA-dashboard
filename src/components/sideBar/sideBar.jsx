import React, { useState } from "react";
import styles from "./sideBar.module.scss";
import { sideBarMiddle, sideBarTop } from "../../utils/sideBarData";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
function SideBar(props) {
  const [active, setActive] = useState([0]);

  return (
    <div>
      <div className={styles.sideBar}>
        <div className={styles.sibeBar_data}>
          <ul className={styles.sideBar_list}>
            {sideBarTop.map((item, index) => (
              <Link className={styles.link} to={item.link}>
                {" "}
                <li
                  style={{
                    color: active == index && "#00B6FF",
                    borderLeft: active == index && "3px solid #00B6FF",
                  }}
                  onClick={() => setActive(index)}
                  key={index}
                  className={styles.sideBar_row}
                >
                  <div className={styles.icon}>{item.icon}</div>
                  <div className={styles.title}>{item.title}</div>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className={styles.sibeBar_data}>
          <ul className={styles.sideBar_list}>
            {sideBarMiddle.map((item, index) => (
              <Link className={styles.link} to={item.link}>
                {" "}
                <li key={index} className={styles.sideBar_row}>
                  <div className={styles.icon}>{item.icon}</div>
                  <div className={styles.title}>{item.title}</div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <ul >
            <li className={styles.sideBar_row}>
              <div className={styles.icon}>
                <MdDarkMode />
              </div>
              <div className={styles.title}>Dark</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
