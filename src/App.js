import React, { useEffect, useState } from 'react';
import { getPokemon } from './services/Componets/pokemon';
import Pokemonlist from './services/Componets/pokemonlist/Pokemonlist';

export function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [query, setQuery] = useState('');
  console.log(getPokemon());
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);
  return <div>{!loading && <Pokemonlist pokemon={pokemon} />}</div>;
}

export default App;
