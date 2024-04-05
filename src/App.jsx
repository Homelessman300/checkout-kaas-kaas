import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CoinCapData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleAssets, setVisibleAssets] = useState(30);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets');
        console.log(response);
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
    <div>
      <h1>Crypto Assets</h1>
      <ul>
        {data.map(asset => (
          <li key={asset.id}>{asset.name} - {asset.symbol} ${parseFloat(asset.priceUsd).toFixed(2)}</li>
        ))}
      </ul>
      {visibleAssets < 100 && (
        <button onClick={handleShowMore}>Show More</button>
      )}
    </div>
  );
}

export default CoinCapData;
