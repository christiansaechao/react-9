import { useState } from "react";
import "./App.css";

/**
 * useState - keep track of stuff, in app memory, temporary memory
 * localStorage - in memory, in your browser
 *
 * 1. string
 * 2. number
 * 3. boolean
 * 4. object
 * 5. array[strings]
 */

function App() {
  const userStats = {
    id: 1,
    name: "Jane Smith",
    age: 25,
    height: 60,
    weight: 125,
  };

  const compsArr = ["Rally in the Valley", "Bend Boulder Bash", "National Cup"];

  const [sport, setSport] = useState("Climbing");
  const [rank, setRank] = useState();
  const [team, setTeam] = useState(true);
  const [stats, setStats] = useState(userStats);
  const [comps, setComps] = useState(compsArr);


  // const sportsInput = document.getElementById("sports-input");
  // sportsInput?.addEventListener("onChange", (e) => {
  //   const text = e.target.value;
  //   setInnerText = "new value";
  // });



  return (
    <>
      <h2>Update Sports Profile</h2>
      <form>
        
        <div className="border-1">
          Sport Category <p>{sport}</p>
          <input onChange={(e) =>  setSport(e.target.value)} value={sport} className="border-1" />
        </div>
       
        <div className="border-1">
          National Rank<p>{rank}</p>
        </div>
       
        <div className="border-1">
          <label>Team</label>
            <input type="checkbox" onChange={(e) => setRank(e.target.value)} value={rank}/>
          On National Team<p>{team ? "Yes" : "No"}</p>
        </div>
        
        <div className="border-1">
          Athlete Stats
          <p>
            {Object.entries(stats)?.map(([key, value]) => (
              <div key={key}>
                {key}: {value}
              </div>
            ))}
          </p>
        </div>
        
        <div className="border-1">
          Planned Competition Circuit
          <input type="checkbox" onChange={(e) => setComps(e.target.value)} value={comps} className="border-1" />
          <ul>
            {comps.map((comp) => (
              <li>{comp}</li>
            ))}
          </ul>
        </div>

      </form>
    </>
  );
}

export default App;
