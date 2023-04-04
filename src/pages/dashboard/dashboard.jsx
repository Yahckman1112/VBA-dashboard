import React, { useState } from "react";
import styles from "./dashboard.module.scss";
import WalletTable from "./walletTable";
import SignalGroup from "./template/signalGroup";
import PrivateGroup from "./template/privateGroup";
import Membership from "./template/membership";
import Chart from "./template/chart";
import { Fade, Zoom } from "react-reveal";
function Dashboard(props) {
  const [activateButton, setActiveButton] = useState(1);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div className={styles.dash}>
      <div className="row">
        <div className="col-12 col-lg-5">
          <Fade left duration={1500} delay={600}>
            <div className={styles.chart}>
              <p className={styles.chart_para1}> My wallet</p>

              <div className={styles.chart1}>
                <Chart />
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-12 col-lg-7">
          <Fade right duration={1500} delay={800}>
            <div className={styles.walletTable}>
              <WalletTable />
            </div>
          </Fade>
        </div>
      </div>
      <Zoom duration={1500} delay={1000}>
        <div className={styles.signalGroup}>
          <p className={styles.signalGroup_title}> Signal Group</p>

          <div className={styles.signalGroup_link}>
            <p className={styles.signalGroup_link1}>
              <span
                className={`button ${
                  activateButton === 1 ? styles.link1_main : ""
                } `}
                onClick={() => handleButtonClick(1)}
                style={{ marginRight: "10px", cursor: "pointer" }}
              >
                Group You Manage
              </span>
              <span
                className={`button ${
                  activateButton === 2 ? styles.link1_main : ""
                }`}
                onClick={() => handleButtonClick(2)}
                style={{ cursor: "pointer" }}
              >
                Other Signal Group
              </span>
            </p>
            <p>
              {" "}
              <a href="#" className={styles.link2}>
                {" "}
                Create New Signal Group
              </a>
            </p>
          </div>

          <div className={`  row`}>
            <div className="col-12 col-lg-4">
              <SignalGroup />
            </div>
            <div className="col-12 col-lg-4">
              <PrivateGroup />
            </div>
            <div className="col-12 col-lg-4">
              <Membership />
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default Dashboard;
