import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";


function App() {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get("https://pokeapi.co/api/v2/pokemon/jigglypuff")
                // console.log(response);
                //result.data omdat de data eerst in een object zit
                setPokemons(result.data) // -> als je een setter aanroept, dan word het hele component uitgevoerd, er word een update uitgevoerd.
                console.log(result)

            } catch (error) {
                console.log(error);
            }

        }

        fetchData();
    }, []) // empty array, want we halen maar 1 keer de data opgehaald .Omdat de gebruiker niet een zoekopdracht uitvoert


    return (
        <>
        <div className="pokemon-container">
            <p>{pokemons.name}</p>
           <img src={pokemons.sprites.back_default}/>
        </div>
        </>

        // // {/*<ul>*/}
        // {/*     {pokemons && pokemons.map((pokemon) => {*/}
        // {/*             return <li key={pokemon.name}> {pokemon.name}</li>*/}
        // {/*         }*/}
        //
        // {/*    )}*/}
        // {/*</ul>*/}
    );
}

export default App;
