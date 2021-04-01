//pokemonCard Component
// datatype: object {} (er zijn twee verzamelingen object ,verzameling)
//initialstate als de app opstart, en die is leeg dus -> {} leeg object
// data ophalen met axios. get - request maken in React doe je  met useEffects en daarin async functie met 1 pokemon
// wat je terug krijt = data -> response.data {name, sprites, etc)

import React, {useEffect, useState} from 'react';
import axios from "axios";
import * as url from "url";


function Pokemon ({name}){
    // console.log(props); // wat krijg je terug? alleen de naam zie app.js

    const [singlePokemon, setSinglePokemons] = useState({});

    useEffect(() => {
        async function fetchOneData (){
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                setSinglePokemons(result.data)
                console.log(result.data)

            } catch (e) {
                console.log(e)
            }
        }
        fetchOneData();
    }, [])




    return (
        <div>
            {singlePokemon && <h3>{singlePokemon?.name}</h3>}
        </div>
    )
}

export default Pokemon;














//
//
// function Pokemon (){
//     const [pokemons, setPokemons] = useState({});
//
//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const result = await axios.get("https://pokeapi.co/api/v2/pokemon/pidgey")
//                 setPokemons(result.data.results)
//
//             } catch (error) {
//                 console.log(error);
//             }
//
//         }
//
//         fetchData();
//     }, [])
//
//
//
//     return (
//         <ul>
//             {pokemons.map((pokemon) => {
//                 return <li key={pokemon.name}>{pokemon.name}</li>
//             })}
//         </ul>
//
//     );
//
// }
//
// export default Pokemon;