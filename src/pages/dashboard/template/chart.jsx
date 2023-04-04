import React from "react";
import { VictoryPie } from "victory-pie";
import { VictoryLabel } from "victory";
import styles from "./styles/membership.module.scss";
function Chart(props) {
  const data = [
    { x: "BTC", y: 36.77 },
    { x: "USDT ", y: 36.77 },
    { x: "others", y: 36.77 },
    { x: "BTC", y: 36.77 },
  ];

  const dataColor = ["#FF8B00", "#0019F8", "#D00BF0", "#00B6FF", "white"];

  return (
    <div>
      <VictoryPie
        height={300}
        data={data}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        innerRadius={80}
        labelRadius={100}
        colorScale={dataColor}
        style={{
          labels: { fill: "white", fontSize: 12, fontWeight: "bold" },
        }}
      >
        <VictoryLabel
          text=" $5000 Total Balance"
          x={175}
          y={175}
          textAnchor="middle"
          style={{ fontSize: 18, fontWeight: "bold", fill: "#333" }}
        />
        {/* <p>$5000</p>
    <p>Total Balance</p>
  </text> */}
      </VictoryPie>
    </div>
  );
}

export default Chart;
