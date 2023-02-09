import { useState } from "react";
import Axios from "axios";
import "./App.css";

const App = () => {
  //Setting the Pokemon state
  const [pokemonName, setPokkemonName] = useState("");
  const [pokemon, setPokemon] = useState({});

  // Handling the search for pokemon event and consuming the pokemon Api
  const searchPokemonName = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
        });
      }
    );
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Home pokemon</h1>
        <input
          type={pokemonName}
          onChange={(e) => setPokkemonName(e.target.value)}
        />
        <button onClick={searchPokemonName}>Search pokemon</button>
      </div>
    </div>
  );
};

export default App;
