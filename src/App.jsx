import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [chart1Diagram, setChart1Diagram] = useState([]);
  const [chart2Diagram, setChart2Diagram] = useState([]);

  const fetchPokemonDetails = async (id) => {
    try {
      const response = await fetch(`api.coincap.io/v2/assets/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
    }
  };

  const fetchPokemonList = async () => {
    const chart1Promises = [];
    const chart2Promises = [];

    // Fetching Generation 1 Pokémon (IDs 1 to 151)
    for (let i = 1; i <= 151; i++) {
      chart1Promises.push(fetchPokemonDetails(i));
    }

    // Fetching Generation 2 Pokémon (IDs 152 to 251)
    for (let i = 152; i <= 251; i++) {
      chart2Promises.push(fetchPokemonDetails(i));
    }

    // Waiting for all promises to resolve
    const gen1PokemonData = await Promise.all(chart1Promises);
    const gen2PokemonData = await Promise.all(chart2Promises);

    // Updating state with Pokémon lists
    setChart1Diagram(gen1PokemonData);
    setChart2Diagram(gen2PokemonData);
  };

  useEffect(() => {
    fetchPokemonList();
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