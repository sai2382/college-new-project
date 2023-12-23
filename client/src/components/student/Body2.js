import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Charts = () => {
  useEffect(() => {
    const destroyChart = (chartInstance) => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };

    // Data for the bar chart
    const barData = {
      labels: ['Test1', 'Test2', 'Test3'],
      datasets: [
        {
          label: 'Mock 1',
          data: [10, 4, 76],
          backgroundColor: 'pink',
        },
        {
          label: 'Mock 2',
          data: [10, 4, 77],
          backgroundColor: 'blue',
        },
      ],
    };

    // Options for the bar chart
    const barOptions = {
      scales: {
        x: {
          type: 'category',
          labels: barData.labels,
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    // Data for the line chart
    const lineData = {
      labels: ['Test1', 'Test2', 'Test3','Test4','Test5'],
      datasets: [
        {
          label: 'Line Data',
          data: [20, 10, 60,75,30],
          borderColor: 'green',
          fill: false,
        },
       
      ],
    };

    // Options for the line chart
    const lineOptions = {
      scales: {
        x: {
          type: 'category',
          labels: lineData.labels,
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    // Get the canvas elements
    const barCtx = document.getElementById('barChart');
    const lineCtx = document.getElementById('lineChart');

    // Destroy existing charts if they exist
    const barChartInstance = barCtx && Chart.getChart(barCtx);
    const lineChartInstance = lineCtx && Chart.getChart(lineCtx);
    destroyChart(barChartInstance);
    destroyChart(lineChartInstance);

    // Initialize the Bar chart
    if (barCtx) {
      new Chart(barCtx, {
        type: 'bar',
        data: barData,
        options: barOptions,
      });
    }

    // Initialize the Line chart
    if (lineCtx) {
      new Chart(lineCtx, {
        type: 'line',
        data: lineData,
        options: lineOptions,
      });
    }
  }, []); // Run the effect only once after component mount

  return (
    <div style={{ display: 'flex' }}>
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

export default Charts;
