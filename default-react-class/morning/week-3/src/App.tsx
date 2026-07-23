import { useEffect, useState } from "react";
import { useFetchData } from "./hooks/useFetchData";

import "./App.css";
import { PokemonCard } from "./components/PokemonCard";

// https://pokeapi.co/api/v2/pokemon/ditto

/**
 * useState - to store data
 *  - dynamic variable for updating the query
 *
 * useEffect() - listening for search query change, updating in state and that causes another request to the api
 *
 * fetch function - async/await try/catch | wait for the request complete / get the response back before moving on
 *
 * how do we display the information/data => map
 */

function App() {
  // [useFetchData, useState(bool), useEffect()]
  const [data, fetchData] = useFetchData();
  const [userInput, setUserInput] = useState<any>("pikachu"); // undefined => "" => pikachu

  useEffect(() => {
    fetchData(userInput);
  }, [userInput]);

  console.log(data);

  return (
    <>
      <input onChange={(e) => setUserInput(e.target.value)} value={userInput} />
      {data && <PokemonCard data={data} />}
    </>
  );
}

export default App;
