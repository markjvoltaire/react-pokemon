import React from 'react';

export default function Pokemonlist({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke.id}>
          {poke.pokemon}
          <img src={poke.url_image}></img>
          <span>Type: {poke.type_1}</span>
        </p>
      ))}
    </div>
  );
}
