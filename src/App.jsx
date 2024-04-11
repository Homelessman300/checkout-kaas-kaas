import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CoinCapData.css'; // Import CSS file
import { Link } from 'react-router-dom';
function CoinCapData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleAssets, setVisibleAssets] = useState(30);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets');
        console.log('Fetched Data:', response.data.data);
        setData(response.data.data.slice(0, visibleAssets));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [visibleAssets]);

  const handleShowMore = () => {
    setVisibleAssets(prevVisibleAssets => prevVisibleAssets + 10);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <h1>Crypto Assets</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            {data.map(asset => (
              <tr key={asset.id}>
                <td>
                  <Link to={`/coins/${asset.id}`}>{asset.name}</Link>
                  </td>
                <td>{asset.symbol}</td>
                <td>{asset.priceUsd ? parseFloat(asset.priceUsd).toFixed(2) : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {visibleAssets < 100 && (
        <button onClick={handleShowMore}>Show More</button>
      )}
    </div>
  );
}

export default CoinCapData;
