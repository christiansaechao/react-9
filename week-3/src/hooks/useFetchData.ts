import { useState } from "react";

export const useFetchData = () => {
  const [data, setData] = useState();

  async function fetchData(userInput: string) {
    try {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${userInput}`,
      ).then((res) => res.json());
      console.log("data is being read");
      console.log(data);
      setData(data);
    } catch (err) {
      throw new Error("Erorr trying to get pokemon: " + err);
    }
  }

  return [data, fetchData];
};
