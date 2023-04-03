import React from "react";
import styles from "./dashboard.module.scss";
import WalletTable from "./walletTable";
import SignalGroup from "./template/signalGroup";
import PrivateGroup from "./template/privateGroup";
import Membership from "./template/membership";
function Dashboard(props) {
  return (
    <div className={styles.dash}>
      <div className="row">
        <div className="col-12 col-lg-5">
          <div className={styles.chart}>
            <p className={styles.chart_para1}> My wallet</p>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <div className={styles.walletTable}>
            <WalletTable />
          </div>
        </div>
      </div>
      <div className={styles.signalGroup}>
        <p className={styles.signalGroup_title}> Signal Group</p>
        <div className={styles.signalGroup_link}>
          <p className={styles.signalGroup_link1}>
            <span className={styles.link1_main}>Group You Manage</span>
            <span className={styles.link1_sub}>Other Signal Group</span>
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
    </div>
  );
}

export default Dashboard;
