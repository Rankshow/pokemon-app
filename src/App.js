import { useState } from "react";
import Axios from "axios";
import './App.css';



const App = () => {
  //Setting the Pokemon state
  const [pokemonName, setPokkemonName] = useState("");

  // Handling the search for pokemon event and consuming the pokemon Api
  const searchPokemonName = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      console.log(response)
    })
  };


  return (
    <div className="App">
      <div className='container'>
         <h1>Home pokemon</h1>
         <input type={pokemonName}  onChange={(e) => setPokkemonName(e.target.value)} />
         <button onClick={searchPokemonName}>Search pokemon</button>
      </div>
    </div>
  );
}

export default App;
