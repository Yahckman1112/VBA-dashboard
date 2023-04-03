import React from "react";
import styles from "./dashboard.module.scss";
import WalletTable from "./walletTable";
import SignalGroup from "./template/signalGroup";
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
        <p className={styles.para} ></p>
        <div className={styles.signalGroup_para}>

        <p className={styles.signalGroup_para_1}>

        </p>
        </div>

      <div className={`  row`}>
        
        <div className="col-12 col-lg-4">
          < SignalGroup/>
        </div>
        <div className="col-12 col-lg-4">2</div>
        <div className="col-12 col-lg-4">3</div>
      </div>

      </div>
    </div>
  );
}

export default Dashboard;
