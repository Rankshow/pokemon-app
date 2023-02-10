import { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  //Setting the Pokemon state
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    types: "",
  });

  // Handling the search for pokemon event and consuming the pokemon Api
  const searchPokemonName = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonChosen(true);
      });
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <h1>Home pokemon</h1>
          <input
            type={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
          <button onClick={searchPokemonName}>Search pokemon</button>
        </div>
        <div className="displaySection">
          {!pokemonChosen ? (
            <h1>Please chose a pokemon</h1>
          ) : (
            <>
              <div className="subSection">
                <h1>{pokemon.name}</h1>
                <img src={pokemon.img} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
