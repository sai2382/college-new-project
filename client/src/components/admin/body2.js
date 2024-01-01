import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import Spinner from "../../utils/Spinner";

const Charts = () => {
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (year) => {
    try {
      setLoading(true);
      const url = 'http://localhost:5000/api/admin/Marks123';
      const postData = {
        year: year
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();

      if (Array.isArray(data.result)) {
        return data.result.map(item => item.marks);
      } else {
        console.log('Data.result is not an array:', data.result);
        return [];
      }
    } catch (error) {
      console.log('Error:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1).then((marksArray) => setDatasets([{ label: 'Year 1', data: marksArray }]));
  }, []);

  const destroyChart = (chartInstance) => {
    if (chartInstance) {
      chartInstance.destroy();
    }
  };

  const renderCharts = (label, data) => {
    const barData = {
      labels: Array.from({ length: data.length }, (_, index) => `Test${index + 1}`),
      datasets: [
        {
          label: 'Mock 1',
          data,
          backgroundColor: 'blue',
        },
      ],
    };

    const barOptions = {
      // ... (existing options)
    };

    const lineData = {
      labels: Array.from({ length: data.length }, (_, index) => `Test${index + 1}`),
      datasets: [
        {
          label,
          data,
          borderColor: 'green',
          fill: false,
        },
      ],
    };

    const lineOptions = {
      // ... (existing options)
    };

    const barCtx = document.getElementById('barChart');
    const lineCtx = document.getElementById('lineChart');

    const barChartInstance = barCtx && Chart.getChart(barCtx);
    const lineChartInstance = lineCtx && Chart.getChart(lineCtx);
    destroyChart(barChartInstance);
    destroyChart(lineChartInstance);

    if (barCtx) {
      new Chart(barCtx, {
        type: 'bar',
        data: barData,
        options: barOptions,
      });
    }

    if (lineCtx) {
      new Chart(lineCtx, {
        type: 'line',
        data: lineData,
        options: lineOptions,
      });
    }
  };

  const handleButtonClick = async (year) => {
    const marksArray = await fetchData(year);
    setDatasets([{ label: `Year ${year}`, data: marksArray }]);
  };

  useEffect(() => {
    if (datasets.length > 0) {
      const { label, data } = datasets[0];
      renderCharts(label, data);
    }
  }, [datasets]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
      <h2>Charts</h2>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {[1, 2, 3, 4].map((year) => (
          <button key={year} style={{ margin: '0 10px' }} onClick={() => handleButtonClick(year)}>
            Year {year}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h3>Bar Chart</h3>
          <canvas id="barChart" width="400" height="400"></canvas>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Line Chart</h3>
          <canvas id="lineChart" width="400" height="400"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Charts;
