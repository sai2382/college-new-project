import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js/auto";

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

  const barChartRef = useRef(null);
  const lineChartRef = useRef(null);

  useEffect(() => {
    const destroyChart = (chartInstance) => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };

    const barData = {
      labels : Array.from({ length: marksArray.length }, (_, index) => `Test${index + 1}`),
      datasets: [
        {
          label: "Mock 1",
          data: marksArray,
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
      labels : Array.from({ length: marksArray.length }, (_, index) => `Test${index + 1}`),
      datasets: [
        {
          label: "Line Data",
          data: marksArray,
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

    const barCtx = barChartRef.current.getContext("2d");
    const lineCtx = lineChartRef.current.getContext("2d");

    const barChartInstance = barChartRef.current && new Chart(barCtx, {
      type: "bar",
      data: barData,
      options: barOptions,
    });

    const lineChartInstance = lineChartRef.current && new Chart(lineCtx, {
      type: "line",
      data: lineData,
      options: lineOptions,
    });

    return () => {
      destroyChart(barChartInstance);
      destroyChart(lineChartInstance);
    };
  }, [marksArray]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h2>Bar Chart</h2>
        <canvas ref={barChartRef} width="400" height="400"></canvas>
      </div>
      <div style={{ flex: 1 }}>
        <h2>Line Chart</h2>
        <canvas ref={lineChartRef} width="400" height="400"></canvas>
      </div>
    </div>
  );
};

export default Body;
