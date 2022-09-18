import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ drank, left, waterForDay }) => {
  const data = {
    labels: [
      "Drank water",
      waterForDay < drank ? "Drank more than the daily allowance" : "Left",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [drank, left],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          waterForDay < drank
            ? "rgba(75, 192, 192, 0.2)"
            : "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          waterForDay < drank
            ? "rgba(75, 192, 192, 1)"
            : "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};
