const axios = require("axios");

function getRandomPokemon() {
  const randomId = Math.floor(Math.random() * 898) + 1; // Pokémon IDs gehen von 1 bis 898
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      console.log(
        `\n Pokémon: ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`
      );
      console.log(" Basiswerte:");
      data.stats.forEach((stat) => {
        console.log(`  - ${stat.stat.name}: ${stat.base_stat}`);
      });
    })
    .catch((error) => {
      console.log(" Fehler beim Abrufen des Pokémon. Versuche es erneut.");
    });
}

getRandomPokemon();
