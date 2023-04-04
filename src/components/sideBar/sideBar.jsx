import React, { useState } from "react";
import styles from "./sideBar.module.scss";
import { sideBarMiddle, sideBarTop } from "../../utils/sideBarData";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import Theme from "../../pages/dashboard/template/themes";
function SideBar(props) {
  const [active, setActive] = useState([0]);
  const [bots, setBots] = useState([0]);

  return (
    <div>
      <div className={styles.sideBar}>
        <div className={styles.sibeBar_data}>
          <ul className={styles.sideBar_list}>
            {sideBarTop.map((item, index) => (
              <Link className={styles.link} to={item.link} key={index}>
                {" "}
                <li
                  style={{
                    color: active == index && "#00B6FF",
                    borderLeft: active == index && "1px solid #00B6FF",
                  }}
                  onClick={() => setActive(index)}
                  
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
              <Link
              key={index}
                style={{
                  color: bots == index && "#00B6FF",
                }}
                className={styles.link}
                to={item.link}
                onClick={() => setBots(index)}
              >
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
         
            
              <div className={styles.theme}>
                <Theme />
           
              </div>
          
        
        </div>
      </div>
    </div>
  );
}

export default SideBar;
