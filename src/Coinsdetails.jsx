import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Coinsdetails() {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets');
        setCryptocurrencies(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cryptocurrencies:', error);
      }
    };

    fetchCryptocurrencies();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Cryptocurrencies</h1>
      <ul>
        {cryptocurrencies.map(crypto => (
          <li key={crypto.id}>
            <Link to={`/crypto/${crypto.id}`}>{crypto.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Coinsdetails;
