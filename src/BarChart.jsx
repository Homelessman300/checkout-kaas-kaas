import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

function BarChart() {
  const [cryptoList, setCryptoList] = useState([]);
  const [limit, ] = useState(100);
  const [selectedCrypto, setSelectedCrypto] = useState("");
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
      try {
        if (!selectedCrypto) return;
        const response = await axios.get(
          `https://api.coincap.io/v2/assets/${selectedCrypto}/history?interval=d1`
        );
        setCryptoData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptoData();
  }, [selectedCrypto]);

  const handleCryptoChange = (e) => {
    setSelectedCrypto(e.target.value);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const chartData = {
    labels: cryptoData.map((entry) => formatDate(entry.time)),
    datasets: [
      {
        label: `${selectedCrypto} Price (USD)`,
        data: cryptoData.map((entry) => parseFloat(entry.priceUsd)),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
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
    <div className="BarChart">
      <h1>Cryptocurrency Price History</h1>
      <div>
        <label htmlFor="crypto-select">Select Cryptocurrency: </label>
        <select
          id="crypto-select"
          value={selectedCrypto}
          onChange={handleCryptoChange}
        >
          <option value="">Select a cryptocurrency</option>
          {cryptoList.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name}
            </option>
          ))}
        </select>
      </div>
      <div className="barchart-container">
        {selectedCrypto && <Bar data={chartData} options={options} />}
      </div>
    </div>
  );
}

export default BarChart;
