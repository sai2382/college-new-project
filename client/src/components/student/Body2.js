import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js/auto"; // Import Chart.js

const Body = () => {

  const [data2, setData2] = useState([40, 50, 67, 59]);

  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const testResult = useSelector((state) => state.student.testResult.result);
 
// Check if testResult exists and has data before mapping
const [marksArray, setMarksArray] = useState([]);

  useEffect(() => {
    if (testResult && testResult.length > 0) {
      const marks = testResult.map((item) => item.marks);
      setMarksArray(marks);
    } else {
      setMarksArray([]);
    }
  }, [testResult]);
  
  useEffect(() => {
    const destroyChart = (chartInstance) => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };

    const barData = {
      labels: ["Test1", "Test2", "Test3"],
      datasets: [
        {
          label: "Mock 1",
          data:marksArray, // Changed data2 to data
          backgroundColor: "pink",
        },
     
      ],
    };

    const barOptions = {
      scales: {
        x: {
          type: "category",
          labels: barData.labels,
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    const lineData = {
      labels: ["Test1", "Test2", "Test3", "Test4", "Test5"],
      datasets: [
        {
          label: "Line Data",
          data:marksArray, // Changed data2 to data
          borderColor: "green",
          fill: false,
        },
      ],
    };

    const lineOptions = {
      scales: {
        x: {
          type: "category",
          labels: lineData.labels,
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    const barCtx = document.getElementById("barChart");
    const lineCtx = document.getElementById("lineChart");

    const barChartInstance = barCtx && Chart.getChart(barCtx);
    const lineChartInstance = lineCtx && Chart.getChart(lineCtx);
    destroyChart(barChartInstance);
    destroyChart(lineChartInstance);

    if (barCtx) {
      new Chart(barCtx, {
        type: "bar",
        data: barData,
        options: barOptions,
      });
    }

    if (lineCtx) {
      new Chart(lineCtx, {
        type: "line",
        data: lineData,
        options: lineOptions,
      });
    }
  }, [data2]); // Added data2 as a dependency to re-render charts when it changes

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h2>Bar Chart</h2>
        <canvas id="barChart" width="400" height="400"></canvas>
      </div>
      <div style={{ flex: 1 }}>
        <h2>Line Chart</h2>
        <canvas id="lineChart" width="400" height="400"></canvas>
      </div>
    </div>
  );
};

export default Body;
