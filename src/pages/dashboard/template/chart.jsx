import React from "react";
import { VictoryPie } from "victory-pie";
import styles from "./styles/membership.module.scss";
function Chart(props) {
  const data = [
    { x: "BTC", y: 36.77 },
    { x: "USDT ", y: 36.77 },
    { x: "others", y: 36.77 },
    { x: "BTC", y: 36.77 },
    // { x: " ", y: 3 },
  ];

  const dataColor = ["#FF8B00", "#0019F8", "#D00BF0", "#00B6FF", "white"];

  return (
    <div>
      <VictoryPie
        // colorScale={dataColor}
        // data={data}
        // labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        // innerRadius={70}
        // labelRadius={90}
        // style={{
            //   labels: { fill: "white", fontSize: 12, fontWeight: "bold" },
            // }}
            
            height={290}
        data={data}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        innerRadius={70}
        labelRadius={90}
        colorScale={dataColor}
        style={{
          labels: { fill: "white", fontSize: 12, fontWeight: "bold" }
        }}
      >
      {/* <text className={styles.pieText} x={150} y={150} textAnchor="middle" dominantBaseline="middle">
        Your Text Here
      </text>
      fhjksbsf */}
        <text x={'50%'} y={'50%'} textAnchor="middle" dominantBaseline="middle" style={{color:'blue'}} className={styles.pieText}>
    dvdhvd
  </text>
      </VictoryPie>
    </div>
  );
}

export default Chart;
