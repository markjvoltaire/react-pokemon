export async function getPokemon() {
  // const params = new URLSearchParams();
  // params.set('pokemon');
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);
  const data = await response.json();
  return data;
}
