import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [chart1Diagram, setChart1Diagram] = useState([]);
  const [chart2Diagram, setChart2Diagram] = useState([]);

  const fetchCoinDetails = async (id) => {
    try {
      const response = await fetch(`api.coincap.io/v2/assets/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Coin details:', error);
    }
  };

  const fetchCoinList = async () => {
    const chart1Promises = [];
    const chart2Promises = [];

    for (let i = 1; i <= 151; i++) {
      chart1Promises.push(fetchCoinDetails(i));
    }

    for (let i = 152; i <= 251; i++) {
      chart2Promises.push(fetchCoinDetails(i));
    }

    const gen1ChartData = await Promise.all(chart1Promises);
    const gen2ChartData = await Promise.all(chart2Promises);

    setChart1Diagram(gen1ChartData);
    setChart2Diagram(gen2ChartData);
  };

  useEffect(() => {
    fetchCoinList();
  }, []);

  return (
    <>
      <h1>Pokemon</h1>
      <h2>Generation 1</h2>
      <ol>
        {chart1Diagram.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ol>
      <h2>Generation 2</h2>
      <ol>
        {chart2Diagram.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ol>
    </>
  );
};

export default App;