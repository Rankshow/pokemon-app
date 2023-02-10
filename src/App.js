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

  // Handling the the add event
  const handleAdd = () => {
    setPokemon('')
  }
  
  // handling the remove event
  const handleRemove = ({pokemon}) => {
    return(
      <>
       {
        searchPokemonName.filter(poke => {
          if (pokemon !== poke.id){
            return pokemon;
          } else {
            return setPokemonChosen(false)
          }
        })
       }
      </>
    )
  }


  // Handling the search event and consuming the pokemon Api
  const searchPokemonName = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        console.log(response)
        setPokemon({
          name: pokemonName,
          species: response.data.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
          move: response.data.moves[1]?.move.name,
        });
        setPokemonChosen(true);
      });
  };
  
  // Rendering the pokemon items to the DOM
  return (
    <>
      <div className="App">
        <div className="container">
          <h1>Pokemon Features</h1>
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
                <img src={pokemon.img} alt=""/>
                  <h2><span>Species:</span> {pokemon.move}</h2>
                  <h2><span>Point:</span> {pokemon.hp}</h2>
                  <h2><span>Type:</span> {pokemon.type}</h2>
                  <h2><span>Attack:</span> {pokemon.attack}</h2>
                  <h2><span>Defense:</span> {pokemon.defense}</h2>
                <div className="btn">
                  <button onClick={handleAdd}>Add</button>
                  <button onClick={handleRemove}>Remove</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
