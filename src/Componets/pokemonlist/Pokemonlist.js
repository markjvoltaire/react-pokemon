import React from 'react';

export default function Pokemonlist({ pokemon }) {
  return (
    <div style={{ height: '10px', width: '10px' }}>
      {pokemon.map((poke) => (
        <>
          <p key={poke.id}>
            {poke.pokemon}
            <img className="images" src={poke.url_image}></img>
          </p>
          <span>Type: {poke.type_1} </span>
        </>
      ))}
    </div>
  );
}
