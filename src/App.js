import React, { useEffect, useState } from 'react';
import Buttons from './Componets/Buttons';
import { getPokemon } from './services/pokemon';
import Pokemonlist from './Componets/pokemonlist/Pokemonlist';

export function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All');

 
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, type);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query]);

  return (
    <div>
      <h1>Find Your Pokemon</h1>
      {!loading && (
        <>
          <Pokemonlist pokemon={pokemon} />
          <Buttons query={query} setQuery={setQuery} setLoading={setLoading} />

          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="all">All</option>
            <option value="bug">Bug</option>
            <option value="fire">Fire</option>
            <option value="normal">Normal</option>
            <option value="dark">Dark</option>
            <option value="flying">Flying</option>
            <option value="posion">Posion</option>
            <option value="dragon">Dragon</option>
            <option value="ghost">Ghost</option>
            <option value="psychic">Psychic</option>
            <option value="electric">Electric</option>
            <option value="grass">Grass</option>
            <option value="rock">Rock</option>
            <option value="fairy">Fairy</option>
            <option value="ground">Ground</option>
            <option value="steel">Steel</option>
            <option value="fighting">Fighting</option>
            <option value="ice">Ice</option>
            <option value="water">Water</option>
          </select>
        </>
      )}
    </div>
  );
}

export default App;
