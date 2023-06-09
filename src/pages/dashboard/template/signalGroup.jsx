import React, { useState } from "react";
import styles from "./styles/signalGroup.module.scss";

import img from "./../../../images/abc.png";
import champ from "./../../../images/champ.png";
import bloom from "./../../../images/bloom.png";
import sha from "./../../../images/SHA.png";
import etd from "./../../../images/ETD.png";
import req from "./../../../images/req.png";

function SignalGroup(props) {
  const signalData = [
    {
      img: img,
      data: "ABC 15",
    },
    {
      img: champ,
      data: "The Champions",
    },
    {
      img: bloom,
      data: "Bloom group",
    },
    {
      img: sha,
      data: "SHA 145",
    },
    {
      img: etd,
      data: "ETDA gurus",
    },
    {
      img: req,
      data: "Req Group",
    },
  ];

  return (
    <div className={styles.sGroup}>
      <p className={styles.signal_para1}>Signal Groups You Belong To</p>
      <div className={styles.line}></div>

      {signalData.map((item, i) => (
        <>
          <div className={styles.user} key={i} >
            <div className={styles.user_img}>
              <img src={item.img} alt="" />
            </div>
            <div className={styles.user_ame}>{item.data} </div>
          </div>
          <div className={styles.line}></div>
        </>
      ))}
    </div>
  );
}

export default SignalGroup;
