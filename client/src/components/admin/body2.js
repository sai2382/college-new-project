import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import Spinner from "../../utils/Spinner";

const Charts = () => {
  const [dataset1, setDataset1] = useState([]);
  const [data2, setd1] = useState([40,50,67,59]);
  const [data234, setd12] = useState([40,50,77]);
  const [data2345, setd123] = useState([40,77,71,59]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const fetchData2 = async () => {
      try {
        setLoading(true);
        const url = 'http://localhost:5000/api/admin/Marks123';
        const postData = {
          year: 4
        };
  
        const response = await fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'  },   body: JSON.stringify(postData) });
  
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
  
        const data = await response.json();
  
        if (Array.isArray(data.result)) {
          const marksArray = data.result.map(item => item.marks);
             setd1(marksArray)
           // console.log(marksArray)
        } else {
          console.log('Data.result is not an array:', data.result);
        }
      } catch (error) {
        console.log('Error:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData2();
  }, []);
  
  useEffect(() => {
    const fetchData3 = async () => {
      try {
        setLoading(true);
        const url = 'http://localhost:5000/api/admin/Marks123';
        const postData = {
          year: 3
        };
  
        const response = await fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'  },   body: JSON.stringify(postData) });
  
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
  
        const data = await response.json();
  
        if (Array.isArray(data.result)) {
          const marksArray = data.result.map(item => item.marks);
             setd12(marksArray)
           // console.log(marksArray)
        } else {
          console.log('Data.result is not an array:', data.result);
        }
      } catch (error) {
        console.log('Error:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData3();
  }, []);


  
  useEffect(() => {
    const fetchData4 = async () => {
      try {
        setLoading(true);
        const url = 'http://localhost:5000/api/admin/Marks123';
        const postData = {
          year: 2
        };
  
        const response = await fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'  },   body: JSON.stringify(postData) });
  
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
  
        const data = await response.json();
  
        if (Array.isArray(data.result)) {
          const marksArray = data.result.map(item => item.marks);
             setd123(marksArray)
           // console.log(marksArray)
        } else {
          console.log('Data.result is not an array:', data.result);
        }
      } catch (error) {
        console.log('Error:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData4();
  }, []);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        setLoading(true);
        const url = 'http://localhost:5000/api/admin/Marks123';
        const postData = {
          year: 1
        };
  
        const response = await fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'  }, body: JSON.stringify(postData) });
  
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
  
        const data = await response.json();
  
        if (Array.isArray(data.result)) {
          const marksArray = data.result.map(item => item.marks);
          setDataset1(marksArray);
           // console.log(marksArray)
        } else {
          console.log('Data.result is not an array:', data.result);
        }
      } catch (error) {
        console.log('Error:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData1();
  }, []);


 

  const destroyChart = (chartInstance) => {
    if (chartInstance) {
      chartInstance.destroy();
    }
  };
   
  const renderCharts = (data) => {
    const barData = {
     labels : Array.from({ length: data.length }, (_, index) => `Test${index + 1}`),
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
       labels : Array.from({ length: data.length }, (_, index) => `Test${index + 1}`),
      datasets: [
        {
          label: 'Line Data',
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
  





  const renderCharts4 = (data2345) => {
    const barData = {
     labels : Array.from({ length: data2345.length }, (_, index) => `Test${index + 1}`),
      datasets: [
        {
          label: 'Mock 1',
           data2345,
          backgroundColor: 'blue',
        },
      ],
    };

    const barOptions = {
      // ... (existing options)
    };

    const lineData = {
       labels : Array.from({ length: data2345.length }, (_, index) => `Test${index + 1}`),
      datasets: [
        {
          label: 'Line Data',
          data2345,
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






  const renderCharts3 = (data234) => {
    const barData = {
     labels : Array.from({ length: data234.length }, (_, index) => `Test${index + 1}`),
      datasets: [
        {
          label: 'Mock 1',
          data234,
          backgroundColor: 'blue',
        },
      ],
    };

    const barOptions = {
      // ... (existing options)
    };

    const lineData = {
       labels : Array.from({ length: data234.length }, (_, index) => `Test${index + 1}`),
      datasets: [
        {
          label: 'Line Data',
          data234,
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





  const renderCharts2 = (data2) => {
    const barData = {
     labels : Array.from({ length: data2.length }, (_, index) => `Test${index + 1}`),
      datasets: [
        {
          label: 'Mock 1',
          data2,
          backgroundColor: 'blue',
        },
      ],
    };

    const barOptions = {
      // ... (existing options)
    };

    const lineData = {
       labels : Array.from({ length: data2.length }, (_, index) => `Test${index + 1}`),
      datasets: [
        {
          label: 'Line Data',
          data2,
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
  renderCharts(dataset1);
  const handleButtonClick = (buttonNumber) => {
    // Handle different data sets based on buttonNumber
    // For now, let's assume buttonNumber 1 corresponds to dataset1
    renderCharts(dataset1);
  };
  const handleButtonClick2 = () => {
    // Handle different data sets based on buttonNumber
    // For now, let's assume buttonNumber 1 corresponds to dataset1
    renderCharts2(data2);

   
  };
  const handleButtonClick3 = () => {
    // Handle different data sets based on buttonNumber
    // For now, let's assume buttonNumber 1 corresponds to dataset1
    renderCharts3(data234);
  };
  const handleButtonClick4 = () => {
    // Handle different data sets based on buttonNumber
    // For now, let's assume buttonNumber 1 corresponds to dataset1
    renderCharts4(data2345);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
      <h2>Charts</h2>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <button style= {{ margin: '0 10px' }} onClick={() => handleButtonClick(1)}> Year 1</button>
        <button style={{ margin: '0 10px' }} onClick={() => handleButtonClick2()}>Year 2</button>
        <button style={{ margin: '0 10px' }} onClick={() => handleButtonClick3()}>Year 3</button>
        <button style={{ margin: '0 10px' }} onClick={() => handleButtonClick4()}>Year 4</button>
        {/* Add more buttons for different data sets if needed */}
        {/* Add more buttons for different data sets if needed */}
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
