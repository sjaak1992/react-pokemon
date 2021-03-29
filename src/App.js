import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";



function App() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
                setPokemons(response.data.results)
                console.log(response.data.results);
                //data.results omdat de data eerst in een object zit
            } catch (error) {
                console.log(error);
            }

        }
        fetchData();
    } , [])


  return (
      <ul>
           {pokemons && pokemons.map((pokemon) => {
                   return <li key={pokemon.name}> {pokemon.name}</li>
               }
          )}
      </ul>
  );
}

export default App;
