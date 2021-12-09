import React from 'react';

export default function Pokemonlist({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke.id}>{poke.pokemon}</p>
      ))}
    </div>
  );
}
