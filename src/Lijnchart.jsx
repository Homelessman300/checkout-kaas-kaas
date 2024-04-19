import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, LinearScale, PointElement, LineElement } from "chart.js";


function LineChart() {
  Chart.register(PointElement)
  Chart.register(CategoryScale);
  Chart.register(LinearScale);
  Chart.register(LineElement);

  const [cryptoList, setCryptoList] = useState([]);
  const [limit, setLimit] = useState(100);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coincap.io/v2/assets?limit=${limit}`
        );
        setCryptoList(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [limit]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      if (!selectedCrypto) return;

      try {
        const response = await axios.get(
          `https://api.coincap.io/v2/assets/${selectedCrypto.id}/history?interval=d1`
        );
        setCryptoData([response.data.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptoData();
  }, [selectedCrypto]);

  const handleCryptoChange = (e) => {
    const value = e.target.value;
    const crypto = cryptoList.find((crypto) => crypto.id === value);
    if (crypto) {
      setSelectedCrypto(crypto);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const chartData = {
    labels: cryptoData.length > 0 ? cryptoData[0].map((entry) => formatDate(entry.time)) : [],
    datasets: selectedCrypto
      ? [
          {
            label: `${selectedCrypto.name} Price (USD)`,
            data: cryptoData.length > 0 ? cryptoData[0].map((entry) => parseFloat(entry.priceUsd)) : [],
            fill: false,
            borderColor: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`,
            tension: 0.1,
          },
        ]
      : [],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (USD)",
        },
      },
    },
  };

  return (
    <div className="LineChart">
      <h1>Cryptocurrency Price History</h1>
      <div>
        <label htmlFor="crypto-select">Select Cryptocurrency: </label>
        <select id="crypto-select" onChange={handleCryptoChange}>
          <option value="">Select a cryptocurrency</option>
          {cryptoList.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name}
            </option>
          ))}
        </select>
      </div>
      <div className="linechart-container">
       {!cryptoData ? 'loading...' :  <Line data={chartData} options={options} />}
      </div>
    </div>
  );
}

export default LineChart;