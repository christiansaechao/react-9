import { useState } from "react";
// import type { GameType } from "../types/games.types";

/**
 * // api request, fetching data
 * steam: request for all the games in the library (50)
 * {
 *  id: number;
 *  title: string;
 *  year: number;
 * }
 */

export type GameType = {
  id: number;
  game_name: string;
  completed: boolean;
}

// component, props: { id, game_name, completed }
export const GameComponent = () => {
  const [game, setGame] = useState<string>("");
  const [numberOfGames, setNumberOfGames] = useState<GameType>(); // undefined
  const [saved, setSaved] = useState(false);
  const [gameType, setGameType] = useState([]);
  const [gameSets, setGameSets] = useState([]);

  return (
    <>
      Get the game from the user:
      <input
        type="checkbox"
        onChange={(e) => setGame(e.target.value)}
        value={game}
      />
    </>
  );
};



const App = () => {

    return (
        <GameComponent />
    )
}