import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Coinsdetails() {
  const { id } = useParams();
  const [cryptocurrencies, setCryptocurrencies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
        setCryptocurrencies(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCryptocurrencies();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;



  return (
    <div>
      <h1>Cryptocurrencies</h1>
      {cryptocurrencies ? (
        <div>
          <p>id: {cryptocurrencies.id}</p>
          <p>changePercent24Hr: {cryptocurrencies.changePercent24Hr}</p>
          <p>explorer: {cryptocurrencies.explorer}</p>
          <p>marketCapUsd: {cryptocurrencies.marketCapUsd}</p>
          <p>maxSupply: {cryptocurrencies.maxSupply}</p>
          <p>name: {cryptocurrencies.name}</p>
          <p>priceUsd: {cryptocurrencies.priceUsd}</p>
          <p>rank: {cryptocurrencies.rank}</p>
          <p>supply: {cryptocurrencies.supply}</p>
          <p>symbol: {cryptocurrencies.symbol}</p>
          <p>volumeUsd24Hr: {cryptocurrencies.volumeUsd24Hr}</p>
          <p>vwap24Hr: {cryptocurrencies.vwap24Hr}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Coinsdetails;