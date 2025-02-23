import { useState } from "react";
import datadef from "../src/Components/data/data.json";
import "./index.css";

import "./App.css";

// import styles from "../src/Components/Carts/pokemons.module.css"
import Pokemon_Team from "./Components/Pokemon-team/Pokemon_Team";

function App() {
  const [pokodata, setPokodata] = useState([]);
  const [team, setTeam] = useState([]);

  const addToTeam = (pokemon) => {
    const exitingPokemon = team.find((p) => p.id === pokemon.id);
    if (exitingPokemon) {
      // setTeam(
      //   team.map((p)=>p.id===pokemon.id?{...p,count:p.count+1}:p)
      // )
      alert("This Pokemon is already in your team");
    } else {
      setTeam([...team, { ...pokemon, count: 1 }]);
    }
  };

  return (
    <div className="body2">
      <h1 className="header">Pokemon Team Manager</h1>
      <Pokemon_Team
        pokodata={datadef}
        team={team}
        addToTeam={addToTeam}
        setTeam={setTeam}
      />
    </div>
  );
}

export default App;
