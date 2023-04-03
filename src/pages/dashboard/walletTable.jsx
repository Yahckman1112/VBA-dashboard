import React from "react";
import Table from "react-bootstrap";

import styles from "./dashboard.module.scss";
function WalletTable(props) {
  const TableData = [
    {
      exchange: "Binance",
      coin: "BTC",
      ballance: "0.0000123",
    },
    {
      exchange: "Binance",
      coin: "USDT",
      ballance: "0.0000123",
    },
    {
      exchange: "Binance",
      coin: "BUSD",
      ballance: "0.0000123",
    },
  ];
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Exchange Wallet</th>
            <th>Coin</th>
            <th>Ballance</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((item, index) => (
            <tr>
              <td>{item.exchange}</td>
              <td>{item.exchange}</td>
              <td>{item.ballance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WalletTable;
