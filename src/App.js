import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import pokeapi from "./assets/screenshots/pokeapi_256.png"
import Pokemon from "./Components /Pokemon";
import * as url from "url";


function App() {

    const [pokemons, setPokemons] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');


    useEffect(() => {
        async function fetchData() {
            setError(''); // wanneer error, zorgt dit ervoor dat de error erna weer weg gaat
            toggleLoading(true);

            try {
                const result = await axios.get("https://pokeapi.co/api/v2/pokemon/")
                setPokemons(result.data.results) // -> als je een setter aanroept, dan word het hele component uitgevoerd, er word een update uitgevoerd.
                // console.log(result)

            } catch (error) {
                setError("Whoopsie, er is iets mis gegaan met het ophalen met de data!");
                console.log(error);
            }
            toggleLoading(false); // klaar met laden
        }

        fetchData();
    }, []) // empty array, want we halen maar 1 keer de data opgehaald .Omdat de gebruiker niet een zoekopdracht uitvoert


    return (
        <>
            <header>
                <img src={pokeapi} alt="pokeapi-logo"/>
            </header>

            <div className="buttons">
                <button id="button-one" type="button">Volgende</button>
                <button id="button-two" type="button">Vorige</button>
            </div>


            <div className="card-container">
                {error && <p>{error}</p>}
                {loading && <p>Data wordt geladen...</p>}

                {pokemons &&
                pokemons.map((pokemon) => {
                    console.log(pokemon) // wat zit erin? naam en url

                    return (
                        <Pokemon url={pokemon.url} name={pokemon.name}/>  //name geef je mee aan component als parameter
                    )

                })}

            </div>
        </>


    );
}

export default App;
