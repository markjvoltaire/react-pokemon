import React, { useEffect, useState } from 'react';
import Buttons from './services/Componets/Buttons';
import { getPokemon } from './services/Componets/pokemon';
import Pokemonlist from './services/Componets/pokemonlist/Pokemonlist';

export function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query]);

  return (
    <div>
      {!loading && (
        <>
          <Pokemonlist pokemon={pokemon} />
          <Buttons query={query} setQuery={setQuery} setLoading={setLoading} />
        </>
      )}
    </div>
  );
}

export default App;
