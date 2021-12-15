import React, { useEffect, useState } from 'react';
import Buttons from './Componets/Buttons';
import { getPokemon } from './Componets/pokemon';
import Pokemonlist from './Componets/pokemonlist/Pokemonlist';

export function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  //    function filterPokemons() = async () => {
  //   return pokemon.filter(())
  //  }

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
      <h1>Find Your Pokemon</h1>
      {!loading && (
        <>
          <Pokemonlist pokemon={pokemon} />
          <Buttons query={query} setQuery={setQuery} setLoading={setLoading} />

          <select>
            <option>All</option>
            <option>Bug</option>
            <option>Fire</option>
            <option>Normal</option>
            <option>Dark</option>
            <option>Flying</option>
            <option>Posion</option>
            <option>Dragon</option>
            <option>Ghost</option>
            <option>Psychic</option>
            <option>Electric</option>
            <option>Grass</option>
            <option>Rock</option>
            <option>Fairy</option>
            <option>Ground</option>
            <option>Steel</option>
            <option>Fighting</option>
            <option>Ice</option>
            <option>Water</option>
          </select>
        </>
      )}
    </div>
  );
}

export default App;
