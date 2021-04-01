import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./Components /Pokemon";
import * as url from "url";


function App() {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get("https://pokeapi.co/api/v2/pokemon/")
                setPokemons(result.data.results) // -> als je een setter aanroept, dan word het hele component uitgevoerd, er word een update uitgevoerd.
                // console.log(result)

            } catch (error) {
                console.log(error);
            }

        }

        fetchData();
    }, []) // empty array, want we halen maar 1 keer de data opgehaald .Omdat de gebruiker niet een zoekopdracht uitvoert


    return (

        <div>
            <ul>
            {pokemons &&
            pokemons.map((pokemon) => {
                // console.log(pokemon) // wat zit erin? naam en url

                return (
                    <Pokemon url={pokemon.url} name={pokemon.name}/>
                )

            })}
            </ul>
        </div>




    );
}

export default App;
